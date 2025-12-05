import React from "react";
import {
  HiOutlineShoppingCart,
  HiOutlineExclamation,
  HiOutlineClock,
} from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi2";

// Realistic test data
const testData = [
  { number: 34563456, name: "Arjun Mehta", order: "Blood Test, X-Ray" },
  { number: 34563457, name: "Priya Sharma", order: "ECG, Ultrasound" },
  { number: 34563458, name: "Rohit Gupta", order: "CT Scan, Blood Sugar" },
  { number: 34563459, name: "Sneha Iyer", order: "MRI Scan, Cholesterol Test" },
  { number: 34563460, name: "Vikram Rao", order: "Lipid Profile, Urine Test" },
  { number: 34563461, name: "Anjali Verma", order: "Vitamin D Test, ECG" },
  {
    number: 34563462,
    name: "Karan Singh",
    order: "Blood Test, Liver Function Test",
  },
  { number: 34563463, name: "Neha Kapoor", order: "Thyroid Test, Ultrasound" },
  { number: 34563464, name: "Sandeep Joshi", order: "CBC, Blood Sugar" },
  { number: 34563465, name: "Ritika Desai", order: "X-Ray, ECG" },
];

const Billing = () => {
  return (
    <div className="p-8">
      <div className="uppercase mb-5">Billing</div>
      <div className="flex w-full space-x-12">
        <div className="w-2/3">
          <div className="flex flex-col space-y-2">
            <div className="flex h-12 bg-neutral-500 items-center px-5 text-white rounded-xl font-bold">
              <div className="w-1/3">Number</div>
              <div className="w-1/3">Name</div>
              <div className="w-1/3">Order Items</div>
            </div>

            {testData.map((row) => (
              <div
                key={row.number}
                className="flex h-12 bg-neutral-100 items-center px-5 rounded-xl"
              >
                <div className="w-1/3">{row.number}</div>
                <div className="w-1/3 font-bold">{row.name}</div>
                <div className="w-1/3">{row.order}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/3 relative">
          <div className="sticky top-12">
            <input
              className="w-full h-12 px-4 flex justify-start items-center border-neutral-400 border mb-4 rounded-xl"
              placeholder="Search Invoices"
            />
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-700 text-white flex flex-col justify-center items-center rounded-xl space-y-2 pt-3 col-span-2">
                <HiOutlinePlus className="text-2xl" />
                <div className="uppercase font-semibold text-xs">NEW</div>
              </div>
              <div className="aspect-square bg-yellow-700 text-white flex flex-col justify-center items-center rounded-xl space-y-2 pt-3">
                <HiOutlineShoppingCart className="text-2xl" />
                <div className="uppercase font-semibold text-xs">PO</div>
              </div>
              <div className="aspect-square bg-black text-white flex flex-col justify-center items-center rounded-xl space-y-2 pt-3">
                <HiOutlineClock className="text-2xl" />
                <div className="uppercase font-semibold text-xs">Escalate</div>
              </div>
              <div className="aspect-square bg-orange-700 text-white flex flex-col justify-center items-center rounded-xl space-y-2 pt-3">
                <HiOutlineExclamation className="text-2xl" />
                <div className="uppercase font-semibold text-xs">PROBLEM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
