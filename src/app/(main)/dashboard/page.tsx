"use client";
import { useDemoContext } from "@/context/DemoProvider";
import React, { useState } from "react";
import { FaAsterisk } from "react-icons/fa6";
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineExclamation,
  HiOutlineClock,
} from "react-icons/hi";
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePaperAirplane,
  HiOutlinePhone,
  HiOutlineUsers,
} from "react-icons/hi2";

const Dashboard = () => {
  const [isNewAppointmentModalOpen, setIsNewAppointmentModalOpen] =
    useState(false);

  const { pending, booking, operatingUnits, problemsCount } = useDemoContext();

  return (
    <>
      {isNewAppointmentModalOpen && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/80 animate-backdrop-blur"
          onClick={() => setIsNewAppointmentModalOpen(false)}
        >
          <div
            className="w-[800px] h-[500px] bg-white rounded-xl overflow-hidden animate-modal-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full">
              <div className="w-1/2 flex flex-col justify-between">
                <div className="space-y-4 p-8">
                  <div className="text-xl">NEW APPOINTMENT</div>
                  <label
                    htmlFor="name-input"
                    className="flex w-full h-12 items-center border border-neutral-400 rounded-xl overflow-hidden cursor-text 
             focus-within:ring-blue-500 focus-within:ring-2"
                  >
                    <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                      <HiOutlineUser />
                    </div>
                    <input
                      id="name-input"
                      className="w-full h-full px-3 outline-none"
                      placeholder="Name"
                    />
                  </label>

                  <label
                    htmlFor="phonenumber-input"
                    className="flex w-full h-12 items-center border border-neutral-400 rounded-xl overflow-hidden cursor-text 
             focus-within:ring-blue-500 focus-within:ring-2"
                  >
                    <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                      <HiOutlinePhone />
                    </div>
                    <input
                      id="phonenumber-input"
                      className="w-full h-full px-3 outline-none"
                      placeholder="Phone Number"
                    />
                  </label>

                  <div className="border-t border-t-neutral-300 pt-2 flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="bg-black text-white text-sm h-8 flex items-center px-4 rounded-xl cursor-pointer">
                        Pay Later
                      </div>
                      <div className="bg-neutral-200 text-black text-sm h-8 flex items-center px-4 rounded-xl cursor-pointer">
                        Pay Now
                      </div>
                    </div>
                    <div className="flex items-end flex-col">
                      <span className="uppercase text-xs text-neutral-400">
                        Amount Due
                      </span>
                      <div className="text-xl mb-3">₹1899.00</div>
                      <div className="text-neutral-400 text-sm">
                        Tax: ₹289.00
                      </div>
                      <div className="text-neutral-400 text-sm">
                        Amount: ₹1289.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <label
                    htmlFor="phonenumber-input"
                    className="flex w-full h-12 items-center border border-neutral-400 rounded-xl overflow-hidden cursor-text 
             focus-within:ring-blue-500 focus-within:ring-2"
                  >
                    <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                      <HiOutlinePaperAirplane />
                    </div>
                    <input
                      id="phonenumber-input"
                      className="w-full h-full px-3 outline-none"
                      placeholder="Refered By (Optional)"
                    />
                  </label>
                </div>
              </div>

              <div className="w-1/2  space-y-4 bg-neutral-200 overflow-y-auto relative">
                <div className="bg-white/0 space-y-3 px-5 pt-8 sticky top-0 backdrop-blur-sm">
                  <div className="uppercase">Select Test</div>
                  <input
                    className="w-full h-10 bg-white border-neutral-300 border rounded-xl flex items-center px-4 ring-2 ring-orange-600 focus:outline-0"
                    placeholder="Search"
                  />
                </div>
                <div className="space-y-3 px-5 pb-20">
                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Blood Test</span>
                    </div>
                    <span className="text-neutral-600">₹450</span>
                  </label>

                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Urine Analysis</span>
                    </div>
                    <span className="text-neutral-600">₹300</span>
                  </label>

                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Liver Function Panel</span>
                    </div>
                    <span className="text-neutral-600">₹600</span>
                  </label>

                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Thyroid Panel</span>
                    </div>
                    <span className="text-neutral-600">₹400</span>
                  </label>

                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Vitamin D Test</span>
                    </div>
                    <span className="text-neutral-600">₹350</span>
                  </label>
                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Blood Test</span>
                    </div>
                    <span className="text-neutral-600">₹450</span>
                  </label>

                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Urine Analysis</span>
                    </div>
                    <span className="text-neutral-600">₹300</span>
                  </label>

                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Liver Function Panel</span>
                    </div>
                    <span className="text-neutral-600">₹600</span>
                  </label>

                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Thyroid Panel</span>
                    </div>
                    <span className="text-neutral-600">₹400</span>
                  </label>

                  <label className="bg-white px-4 h-10 flex items-center justify-between rounded-xl text-sm cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 me-1" />
                      <span>Vitamin D Test</span>
                    </div>
                    <span className="text-neutral-600">₹350</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-8">
        {/* MAIN */}
        <div className="uppercase mb-5">Information</div>
        <div className="grid grid-cols-6 gap-5">
          <div className="aspect-square bg-linear-to-b to-violet-600 from-violet-800 flex flex-col justify-between py-5 px-5 text-white rounded-xl">
            <div className="text-4xl">{pending}</div>
            <div>PENDING</div>
          </div>
          <div className="aspect-square bg-linear-to-b to-green-600  from-green-800 flex flex-col justify-between py-5 px-5 text-white rounded-xl">
            <div className="text-4xl">{booking}</div>
            <div>BOOKING</div>
          </div>
          <div className="aspect-square bg-linear-to-b to-neutral-600 from-neutral-800 flex flex-col justify-between py-5 px-5 text-white rounded-xl">
            <div className="text-4xl">{operatingUnits}/9</div>
            <div>UNITS</div>
          </div>
          <div className="aspect-square bg-linear-to-b to-orange-600 from-orange-800 flex flex-col justify-between py-5 px-5 text-white rounded-xl">
            <div className="text-4xl">{problemsCount}</div>
            <div>PROBLEMS</div>
          </div>
          <div className="aspect-square bg-neutral-200 flex flex-col justify-center items-center py-5 text-neutral-400 rounded-xl">
            <span className="text-6xl">&#8667;</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-12">
          <div className="flex flex-col space-y-2">
            <div className="uppercase mb-5">UPCOMING REPORT COLLECTION</div>
            <div className="flex h-12 bg-blue-500 items-center px-5 text-white rounded-xl font-bold">
              <div className="w-1/2">Name</div>
              <div className="w-1/2">Order Items</div>
            </div>
            <div className="flex h-12 bg-blue-100 items-center px-5 rounded-xl">
              <div className="w-1/2 font-bold">Mr. Raghav Sharma</div>
              <div className="w-1/2 truncate">
                Complete Blood Count, Liver Function Test, Lipid Profile
              </div>
            </div>
            <div className="flex h-12 bg-blue-100 items-center px-5 rounded-xl">
              <div className="w-1/2 font-bold">Ms. Priya Nair</div>
              <div className="w-1/2 truncate">
                Kidney Function Test, Blood Sugar Fasting, Thyroid Panel
              </div>
            </div>
            <div className="flex h-12 bg-blue-100 items-center px-5 rounded-xl">
              <div className="w-1/2 font-bold">Mr. Arjun Mehta</div>
              <div className="w-1/2 truncate">
                Vitamin D, ECG, Brain Function Test
              </div>
            </div>
            <div className="flex h-12 bg-blue-100 items-center px-5 rounded-xl">
              <div className="w-1/2 font-bold">Ms. Kavya Reddy</div>
              <div className="w-1/2 truncate">
                Iron Studies, Blood Sugar Postprandial, Eye Exam
              </div>
            </div>
            <div className="flex h-12 bg-blue-100 items-center px-5 rounded-xl">
              <div className="w-1/2 font-bold">Mr. Vivek Choudhary</div>
              <div className="w-1/2 truncate">
                Urine Analysis, Lipid Profile, ECG
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="uppercase mb-5">CREATE NEW</div>
              <div className="grid grid-cols-4 gap-3">
                <div
                  onClick={() => {
                    setIsNewAppointmentModalOpen((current) => !current);
                  }}
                  className="aspect-square bg-violet-700 text-white flex flex-col justify-center items-center rounded-xl space-y-2 pt-3 cursor-pointer"
                >
                  <FaAsterisk className="text-4xl" />
                  <div className="uppercase font-semibold text-xs">
                    Appointment
                  </div>
                </div>
                <div className="aspect-square bg-yellow-700 text-white flex flex-col justify-center items-center rounded-xl space-y-2 pt-3">
                  <HiOutlineShoppingCart className="text-4xl" />
                  <div className="uppercase font-semibold text-xs">PO</div>
                </div>
                <div className="aspect-square bg-black text-white flex flex-col justify-center items-center rounded-xl space-y-2 pt-3">
                  <HiOutlineClock className="text-4xl" />
                  <div className="uppercase font-semibold text-xs">
                    DOWNTIME
                  </div>
                </div>
                <div className="aspect-square bg-orange-700 text-white flex flex-col justify-center items-center rounded-xl space-y-2 pt-3">
                  <HiOutlineExclamation className="text-4xl" />
                  <div className="uppercase font-semibold text-xs">PROBLEM</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="uppercase mb-5">QUICK NOTE</div>
              <textarea className="text-blue-600 border border-neutral-400 w-full h-40 p-3 m-0 resize-none overflow-y-auto rounded-xl m font-mono"></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
