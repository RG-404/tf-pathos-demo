"use client";
import PaymentLogger from "@/components/PaymentLogger";
import React, { useState, useRef, useEffect } from "react";
import {
  HiOutlineInformationCircle,
  HiOutlinePaperAirplane,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2";

import { testListData } from "@/data/DemoData";
import { useDemoContext } from "@/context/DemoProvider";
import { useRouter } from "next/navigation";

const testItems = testListData;

const Case = () => {
  const { createCase } = useDemoContext();

  const router = useRouter();

  const [name, setName] = useState("");
  const [nameErrors, setNameErrors] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErrors, setPhoneErrors] = useState("");
  const [attendee, setAttendee] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const [search, setSearch] = useState("");
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [selectedTestIds, setSelectedTestIds] = useState<number[]>([]);
  const [testListerrors, setTestListErrors] = useState("");

  const [showAttendee, setShowAttendee] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "full_payment" | "pay_later" | "split_payment"
  >("full_payment");
  const [splitAmount, setSplitAmount] = useState(0);

  const attendeeRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (showAttendee && attendeeRef.current) {
      attendeeRef.current.focus();
    }
  }, [showAttendee]);

  const filteredTests = testItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Update handleToggleTest
  const handleToggleTest = (name: string) => {
    const test = testItems.find((t) => t.name === name);
    if (!test) return;

    // Toggle name for display
    setSelectedTests((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    );

    // Toggle testId for storing in case
    setSelectedTestIds((prev) =>
      prev.includes(test.testId)
        ? prev.filter((id) => id !== test.testId)
        : [...prev, test.testId]
    );
  };

  const amount = selectedTests
    .map((test) => testItems.find((t) => t.name === test)?.price || 0)
    .reduce((a, b) => a + b, 0);

  const tax = +(amount * 0.18).toFixed(2); // 18% GST
  const total = amount + tax;

  let dueNow = 0;
  let remainingBalance = 0;

  if (selectedPaymentMethod === "full_payment") {
    dueNow = total;
    remainingBalance = 0;
  } else if (selectedPaymentMethod === "pay_later") {
    dueNow = 0;
    remainingBalance = total;
  } else if (selectedPaymentMethod === "split_payment") {
    dueNow = splitAmount;
    remainingBalance = total - splitAmount;
  }

  const [isPaymentLoggerOpen, setIsPaymentLoggerOpen] = useState(false);

  const validateData = () => {
    console.log(name, phone, attendee);
    let errorrs = [];
    if (!phone) {
      setPhoneErrors("Phone number cannot be empty");
      errorrs.push("phone_number_missing");
    }
    if (!name) {
      setNameErrors("Subject name cannot be empty");
      errorrs.push("subject_name_missing");
    }
    if (selectedTests.length === 0) {
      setTestListErrors("Select atleast one");
      errorrs.push("test_missing");
    }
    if (errorrs.length > 0) return false;
    else return true;
  };

  useEffect(() => {
    setTestListErrors("");
  }, [selectedTests]);

  const handleCreateNewCase = () => {
    createCase({
      amount: total,
      paymentType: "postpaid",
      paymentLog: [],
      subjectName: name,
      test: selectedTestIds,
      subjectPhoneNumber: phone,
    });
  };

  return (
    <>
      {isPaymentLoggerOpen && (
        <div
          onClick={() => setIsPaymentLoggerOpen(false)}
          className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-black/70 z-10 animate-backdrop-blur"
        >
          <div
            className="animate-modal-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <PaymentLogger totalPrice={dueNow} />
          </div>
        </div>
      )}

      <div className="flex h-[calc(100vh-3.5rem)] animate-modal-slide-in">
        {/* Proceed Button */}
        <div className="w-1/2 py-5 bg-white/0 fixed bottom-0 right-0 z-30 flex justify-center items-center">
          <>
            {selectedPaymentMethod === "full_payment" ? (
              <button
                onClick={() => {
                  const correctData = validateData();
                  correctData && setIsPaymentLoggerOpen(true);
                }}
                className="bg-linear-to-t from-orange-700 to-orange-600 text-white w-full mx-5 h-12 uppercase font-bold rounded-xl cursor-pointer"
              >
                Log Payment
              </button>
            ) : selectedPaymentMethod === "pay_later" ? (
              <button
                onClick={() => {
                  const correctData = validateData();
                  if (correctData) {
                    handleCreateNewCase();
                    console.log("DONE");
                  }
                  
                  router.push("/case");
                }}
                className="bg-linear-to-t from-orange-700 to-orange-600 text-white w-full mx-5 h-12 uppercase font-bold rounded-xl cursor-pointer"
              >
                Proceed
              </button>
            ) : (
              <button
                onClick={() => {
                  const correctData = validateData();
                  correctData && setIsPaymentLoggerOpen(true);
                }}
                className="bg-linear-to-t from-orange-700 to-orange-600 text-white w-full mx-5 h-12 uppercase font-bold rounded-xl cursor-pointer"
              >
                Log Payment
              </button>
            )}
          </>
        </div>

        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col relative">
          <div className="flex-1 overflow-y-auto pb-20">
            <div className="space-y-4 p-8">
              <div className="text-xl">NEW CASE</div>
              {/* Name */}
              <label
                className={`flex w-full h-12 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text focus-within:ring-blue-500 focus-within:ring-2 ${
                  nameErrors && "ring-2 ring-red-700"
                }`}
              >
                <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                  <HiOutlineUser />
                </div>
                <input
                  className="w-full h-full px-3 outline-none"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setNameErrors("");
                    setName(e.target.value);
                  }}
                />
              </label>
              {nameErrors && (
                <div className="text-xs text-red-700 uppercase">
                  {nameErrors}
                </div>
              )}
              {/* Phone */}
              <label
                className={`flex w-full h-12 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text focus-within:ring-blue-500 focus-within:ring-2 ${
                  phoneErrors && "ring-2 ring-red-700"
                }`}
              >
                <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                  <HiOutlinePhone />
                </div>
                <input
                  className="w-full h-full px-3 outline-none"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhoneErrors("");
                    setPhone(e.target.value);
                  }}
                />
              </label>
              {phoneErrors && (
                <div className="text-xs text-red-700 uppercase">
                  {phoneErrors}
                </div>
              )}
              {/* Attendee */}
              <div className="border-t border-t-neutral-300 pt-4 space-y-3">
                {!showAttendee && (
                  <button
                    onClick={() => setShowAttendee(true)}
                    className="text-blue-600 text-sm font-medium"
                  >
                    + ADD ATTENDEE
                  </button>
                )}
                {showAttendee && (
                  <label className="flex w-full h-12 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text focus-within:ring-blue-500 focus-within:ring-2">
                    <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                      <HiOutlineUser />
                    </div>
                    <input
                      ref={attendeeRef}
                      className="w-full h-full px-3 outline-none"
                      placeholder="Attendee"
                      value={attendee}
                      onChange={(e) => setAttendee(e.target.value)}
                    />
                  </label>
                )}
              </div>
            </div>
            {/* Payment Methods */}
            <div className="px-8 space-y-4">
              <div className="text-xl">PAYMENT</div>
              <div className="space-y-3">
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    { key: "full_payment", label: "Full Payment" },
                    { key: "pay_later", label: "Pay Later" },
                    { key: "split_payment", label: "Split Payment" },
                  ].map((method) => {
                    const isSelected = selectedPaymentMethod === method.key;
                    return (
                      <button
                        key={method.key}
                        type="button"
                        onClick={() => {
                          setSelectedPaymentMethod(method.key as any);
                          if (method.key !== "split_payment") setSplitAmount(0);
                        }}
                        className={`cursor-pointer rounded-xl border p-4 text-left transition-all w-full ${
                          isSelected
                            ? "border-blue-600 ring-2 ring-blue-400 bg-blue-800 text-white"
                            : "border-gray-300 hover:border-gray-400 bg-white"
                        }`}
                      >
                        <span className="font-medium">{method.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Split Payment Slider */}
                {selectedPaymentMethod === "split_payment" && (
                  <div className="mt-4 space-y-4">
                    {/* Inputs */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Due Now */}
                      <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">
                          Due Now (₹)
                        </label>
                        <input
                          type="number"
                          min={0}
                          max={total}
                          value={splitAmount}
                          onChange={(e) => {
                            let value = +e.target.value;
                            if (value > total) value = total;
                            if (value < 0) value = 0;
                            setSplitAmount(value);
                          }}
                          className="w-full border border-neutral-300 rounded-xl px-3 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Remaining */}
                      <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">
                          Remaining (₹)
                        </label>
                        <input
                          type="number"
                          min={0}
                          max={total}
                          value={total - splitAmount}
                          onChange={(e) => {
                            let value = +e.target.value;
                            if (value > total) value = total;
                            if (value < 0) value = 0;
                            setSplitAmount(total - value);
                          }}
                          className="w-full border border-neutral-300 rounded-xl px-3 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Slider */}
                    <div className="mt-2 w-full">
                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min={0}
                          max={total}
                          step={total * 0.05} // snap points at 5%
                          value={splitAmount}
                          onChange={(e) => setSplitAmount(+e.target.value)}
                          className="flex-1"
                        />

                        {/* CURRENT PERCENTAGE */}
                        <div className="text-sm font-medium text-neutral-600 w-12 text-right">
                          {total > 0
                            ? `${((splitAmount / total) * 100).toFixed(0)}%`
                            : ""}
                        </div>
                      </div>

                      {/* Marks */}
                      <div className="flex justify-between text-xs text-neutral-500 mt-1 pr-12">
                        <span>0%</span>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Amount Section */}
          <div className="animate-slide-up cut-paper-top px-8 py-8 bg-black text-white flex justify-between">
            <div className="space-y-2 w-1/3 pr-8 text-xs">
              <div className="uppercase text-xs text-neutral-400 mb-4">
                ITEMS
              </div>
              {selectedTests.join(", ")}
            </div>

            <div className="w-2/3 flex flex-col bg-neutral-900/20 rounded-xl max-w-xs">
              <div className="flex justify-between w-full mb-3">
                <div className="flex flex-col">
                  <span className="uppercase text-xs text-neutral-400 mb-4">
                    Due Now
                  </span>
                  <span className="text-xl font-semibold text-white">
                    ₹{dueNow.toFixed(2)}
                  </span>
                </div>

                {selectedPaymentMethod !== "full_payment" && (
                  <div className="flex flex-col text-right">
                    <span className="uppercase text-xs text-neutral-400 mb-4">
                      Balance
                    </span>
                    <span className="text-xl font-semibold text-yellow-400">
                      ₹{remainingBalance.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              <div className="w-full border-t border-neutral-700 my-2"></div>

              <div className="flex justify-between w-full text-sm text-neutral-300 mb-1">
                <span>Amount:</span>
                <span>₹{amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-full text-sm text-neutral-300 mb-1">
                <span>Tax (18%):</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 space-y-4 bg-neutral-200 overflow-y-auto">
          <div className="bg-white/0 space-y-3 px-5 pt-8 sticky top-0 backdrop-blur-sm">
            <div></div>
            <div className="uppercase">Select Test</div>

            <input
              className="w-full h-10 bg-white border-neutral-300 border rounded-xl flex items-center px-4 ring-2 ring-neutral-300 focus:outline-0"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="space-y-3 px-5 pb-20">
            {testListerrors && (
              <div className="text-xs text-red-700 uppercase">
                {testListerrors}
              </div>
            )}
            {filteredTests.map((item, idx) => (
              <label
                key={idx}
                className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTests.includes(item.name)}
                    onChange={() => handleToggleTest(item.name)}
                    className="h-4 w-4 me-1"
                  />
                  <span>{item.name}</span>
                </div>
                <span className="text-neutral-600">₹{item.price}</span>
              </label>
            ))}

            {filteredTests.length === 0 && (
              <div className="text-center text-neutral-500 text-sm py-4">
                No tests found
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Case;
