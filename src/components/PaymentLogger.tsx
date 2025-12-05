"use client";

import { useState, useMemo, ChangeEvent, KeyboardEvent } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";

export default function PaymentLogger({ totalPrice }: { totalPrice: number }) {
  // Amounts
  const [upi, setUpi] = useState("");
  const [cash, setCash] = useState("");
  const [bank, setBank] = useState("");

  // Reference IDs (only for UPI & Bank)
  const [upiRef, setUpiRef] = useState("");
  const [bankRef, setBankRef] = useState("");

  const due = totalPrice;

  const sanitize = (v: string) => v.replace(/[^0-9.]/g, "");

  const handleInput =
    (setter: (v: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
      setter(sanitize(e.target.value));
    };

  const blockInvalid = (e: KeyboardEvent<HTMLInputElement>) => {
    if (["e", "E", "+", "-"].includes(e.key)) e.preventDefault();
  };

  const totalPaid = useMemo(() => {
    return (Number(upi) || 0) + (Number(cash) || 0) + (Number(bank) || 0);
  }, [upi, cash, bank]);

  const remaining = useMemo(() => {
    return due - totalPaid;
  }, [due, totalPaid]);

  /**
   * Payment Field Renderer
   * - Cash has no reference input
   * - UPI & Bank show reference when amount is not empty
   */
  const renderPaymentField = (
    label: string,
    amount: string,
    setAmount: (v: string) => void,
    reference: string | null,
    setReference: ((v: string) => void) | null
  ) => (
    <div className="space-y-1" onClick={(e) => e.stopPropagation()}>
      <label className="flex w-full h-10 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text focus-within:ring-blue-500 focus-within:ring-2">
        <div className="h-full bg-neutral-300 flex items-center justify-center w-24 text-xs uppercase">
          {label}
        </div>
        <input
          className="w-full h-full px-3 outline-none text-sm"
          placeholder="Amount"
          inputMode="decimal"
          value={amount}
          onChange={handleInput(setAmount)}
          onKeyDown={blockInvalid}
        />
      </label>

      {/* Reference only for UPI & Bank */}
      {reference !== null && amount.trim() !== "" && (
        <input
          className="w-full h-9 text-sm px-3 border border-neutral-300 rounded-xl outline-none focus:ring-blue-500 focus:ring-2"
          placeholder={`${label} Reference ID`}
          value={reference}
          onChange={(e) => setReference?.(e.target.value)}
        />
      )}
    </div>
  );

  return (
    <div className="bg-white z-20 pb-12  w-[700px] rounded-xl flex flex-col">
      <div className="h-12 px-8 flex items-center border-b-neutral-200 border-b bg-linear-to-t from-orange-800 to-orange-700 rounded-t-xl text-white">
        Payment Logger
      </div>

      <div className="px-8 pt-4 flex gap-10 grow">
        {/* LEFT SIDE — COLLECTION */}
        <div className="w-1/2 flex flex-col">
          <div className="pb-1 mb-2 text-neutral-400">Collection</div>

          {/* Total + Remaining */}
          <div className="flex justify-between pt-2 pb-5">
            <div>
              <div className="text-neutral-500 text-sm">Total Paid</div>
              <div className="text-lg font-semibold">
                ₹{totalPaid.toFixed(2)}
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-neutral-500 text-sm">Remaining Value</div>
              <div
                className={`text-lg font-semibold ${
                  remaining < 0 ? "text-red-600" : "text-green-700"
                }`}
              >
                ₹{remaining.toFixed(2)}
              </div>
            </div>
          </div>

          <div className="space-y-4 grow">
            {renderPaymentField("Cash", cash, setCash, null, null)}
            {renderPaymentField("UPI", upi, setUpi, upiRef, setUpiRef)}
            {renderPaymentField("Bank", bank, setBank, bankRef, setBankRef)}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2">
          <div className="border-b pb-1 text-neutral-400">Due</div>
          <div className="mt-2 text-xl font-semibold">₹{due.toFixed(2)}</div>

          <div className="mt-8">
            <div className="bg-orange-100 rounded-xl">
              <div className="flex items-center space-x-2 text-sm px-3 h-8 border-b border-b-black/20">
                <HiOutlineInformationCircle />
                <div>Declaration</div>
              </div>
              <div className="text-xs px-3 py-4 text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                nobis id aspernatur ex voluptatem odit laboriosam tenetur quo.
              </div>
            </div>
          </div>

          {/* PAYMENT COMPLETE BUTTON */}
          {remaining === 0 && (
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition">
              Payment Complete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
