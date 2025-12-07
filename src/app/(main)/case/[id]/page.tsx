"use client";

import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import LabResultRow from "@/components/LabResultRow";
import { useDemoContext } from "@/context/DemoProvider"; // Your context import
import ReportFlowSheet from "@/components/ReportFlowSheet";
import { testListData } from "@/data/DemoData"; // make sure this is imported

export default function CaseDetailsPage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10);
  const { caseList } = useDemoContext();

  // Find the case from context
  const caseData = caseList.find((c) => c.caseId === id);

  // Patient info
  const patient = caseData
    ? {
        name: caseData.subjectName,
        phone: caseData.subjectPhoneNumber,
        attendee: caseData.attendee || "N/A",
      }
    : { name: "Unknown", phone: "-", attendee: "-" };

  // Map tests with proper category fallback
  const tests = caseData
    ? caseData.test.map((testName) => {
        const t = testListData.find((t) => t.testId === testName);
        return t ? t : { name: testName, price: 0, category: "Unknown" }; // ensure category exists
      })
    : [];

  // Get unique categories for lab assignments
  const labs = Array.from(new Set(tests.map((t) => t.category)));

  // Payment
  const payment = (() => {
    if (!caseData) {
      return {
        method: "-",
        amount: 0,
        tax: 0,
        total: 0,
        paid: 0,
        balance: 0,
      };
    }

    const total = caseData.amount;

    // base & tax breakdown
    const amount = +(total / 1.18).toFixed(2);
    const tax = +(total - amount).toFixed(2);

    // compute paid from log safely
    const paid =
      caseData.paymentLog?.reduce((sum, entry) => {
        return (
          sum +
          (Number(entry.cash) || 0) +
          (Number(entry.bank) || 0) +
          (Number(entry.upi) || 0)
        );
      }, 0) || 0;

    const balance = Math.max(total - paid, 0);

    return {
      method: caseData.paymentType,
      amount,
      tax,
      total,
      paid,
      balance,
    };
  })();

  const [tab, setTab] = useState<
    "overview" | "timeline" | "results" | "download"
  >("overview");

  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "timeline", label: "Timeline" },
    { key: "results", label: "Results" },
    { key: "download", label: "Download" },
  ];

  const tabRefs = tabs.map(() => useRef<HTMLButtonElement>(null));
  const [pillProps, setPillProps] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const index = tabs.findIndex((t) => t.key === tab);
    const ref = tabRefs[index].current;
    if (ref) {
      setPillProps({ left: ref.offsetLeft, width: ref.offsetWidth });
    }
  }, [tab]);

  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] bg-neutral-100">
      {/* LEFT */}
      <div className="w-2/3 overflow-y-scroll p-10 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl font-semibold tracking-tight">
              CASE #{id}
            </div>
            <div className="text-neutral-500 uppercase text-xs mt-1">
              Details & Assignments
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                console.log(caseData);
              }}
              className="bg-blue-900 text-white px-8 h-8 text-sm uppercase rounded-xl"
            >
              Log
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="relative border-b border-neutral-300 pb-2">
          <div className="flex gap-4 relative">
            <motion.div
              className="absolute h-6 bg-black rounded-xl top-0"
              animate={{ left: pillProps.left, width: pillProps.width }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
            {tabs.map((t, index) => (
              <button
                key={t.key}
                ref={tabRefs[index]}
                onClick={() => setTab(t.key as any)}
                className={`relative z-10 uppercase px-3 h-6 text-xs font-medium tracking-wide transition-colors ${
                  tab === t.key ? "text-white" : "text-neutral-500"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        {tab === "overview" && (
          <div className="space-y-10">
            {/* Patient */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
              <div className="uppercase text-xs text-neutral-400 mb-4">
                Patient Information
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-neutral-200 rounded-xl flex items-center justify-center">
                    <HiOutlineUser className="text-neutral-700" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900 uppercase">
                      {patient.name}
                    </div>
                    <div className="text-neutral-600 text-xs">
                      Attendee: {patient.attendee}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-10 w-10 bg-neutral-200 rounded-xl flex items-center justify-center">
                    <HiOutlinePhone className="text-neutral-700" />
                  </div>
                  <div className="font-medium text-neutral-900">
                    {patient.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Labs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
              <div className="uppercase text-xs text-neutral-400 mb-4">
                Lab Assignments
              </div>
              <div className="space-y-3">
                {labs.map((category, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-neutral-100 rounded-xl px-4 py-3"
                  >
                    <div className="font-medium text-neutral-900">
                      {category}
                    </div>
                    <div className="text-xs text-neutral-600">Lab</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Involvement */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
              <div className="uppercase text-xs text-neutral-400 mb-4">
                Involvement
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-neutral-200 rounded-xl flex items-center justify-center">
                    <HiOutlineUser className="text-neutral-700" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">Jane Doe</div>
                    <div className="text-neutral-600 text-xs">Frontdesk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "timeline" && (
          <div className="space-y-4 text-sm">
            <div className="text-neutral-500 uppercase text-xs">
              {" "}
              Case Timeline{" "}
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
              <div className="font-medium text-neutral-700">Case Created</div>
              <div className="text-neutral-500 text-xs">12 Aug, 10:32 AM</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
              <div className="font-medium text-neutral-700">
                {" "}
                Sample Collected{" "}
              </div>
              <div className="text-neutral-500 text-xs">12 Aug, 11:10 AM</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200">
              <div className="font-medium text-neutral-700">
                {" "}
                Assigned to Labs{" "}
              </div>
              <div className="text-neutral-500 text-xs">12 Aug, 11:40 AM</div>
            </div>
          </div>
        )}

        {tab === "results" && (
          <div className="space-y-6">
            <div className="text-neutral-500 uppercase text-xs">Results</div>
            <div className="space-y-4">
              <div className="grid grid-cols-[25%_15%_15%_20%] gap-4 items-center text-sm font-bold px-4">
                <div>Test Name</div>
                <div>Value</div>
                <div>Unit</div>
                <div>Reference</div>
              </div>
              {caseData?.test.map((testId) => (
                <div key={testId} className="border-b pb-4">
                  <LabResultRow testId={testId} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "download" && (
          <div className="space-y-6">
            <div className="text-neutral-500 uppercase text-xs">
              {" "}
              Download Options{" "}
            </div>
            <ReportFlowSheet />
          </div>
        )}
      </div>

      {/* RIGHT */}
      <div className="w-1/3 flex flex-col border-l border-neutral-300 bg-neutral-200">
        {/* Tests */}
        <div className="p-8 space-y-3 overflow-y-auto flex-1">
          <div className="uppercase text-xs text-neutral-600 mb-2">
            {" "}
            Tests Included{" "}
          </div>
          {tests.map((test, idx) => (
            <div
              key={idx}
              className="bg-white px-4 py-3 rounded-xl border border-neutral-300 flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-3">
                <HiOutlineClipboardDocumentCheck className="text-neutral-600" />
                <span className="font-medium text-neutral-900">
                  {test.name}
                </span>
              </div>
              <span className="text-neutral-700">₹{test.price}</span>
            </div>
          ))}
          {tests.length === 0 && (
            <div className="text-neutral-500 text-sm">No tests selected</div>
          )}
        </div>

        {/* COLLAPSIBLE PAYMENT SUMMARY */}
        <div className="sticky bottom-0 bg-black text-white shadow-2xl z-20 border-t border-neutral-700">
          {/* Toggle */}
          <button
            onClick={() => setShowPayment(!showPayment)}
            className="w-full text-left px-8 py-4 uppercase text-xs tracking-wide text-neutral-400 flex justify-between items-center"
          >
            <span>Payment Summary</span>
            <motion.span
              animate={{ rotate: showPayment ? 0 : -90 }}
              transition={{ duration: 0.25 }}
              className="text-neutral-400"
            >
              ▼
            </motion.span>
          </button>
          {/* Animated Content */}
          <AnimatePresence initial={false}>
            {showPayment && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8">
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xl font-bold">
                        {" "}
                        ₹{payment.paid.toFixed(2)}{" "}
                      </div>
                      <div className="text-neutral-400 text-xs mt-1">Paid</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-yellow-400">
                        ₹{payment.balance.toFixed(2)}
                      </div>
                      <div className="text-neutral-400 text-xs mt-1 text-right">
                        {" "}
                        Balance{" "}
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-neutral-700 mt-4 pt-4">
                    <div className="flex justify-between text-sm text-neutral-300">
                      <span>Amount</span>
                      <span>₹{payment.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-neutral-300">
                      <span>Tax (18%)</span>
                      <span>₹{payment.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-md font-semibold mt-2">
                      <span>Total</span>
                      <span>₹{payment.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
