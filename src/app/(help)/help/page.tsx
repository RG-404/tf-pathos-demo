import React from "react";

const HelpPage = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center bg-violet-300 h-44">
        <div className="text-3xl text-white/80 tracking-tighter">Help Centre</div>
      </div>
      <div className="grid grid-cols-6 gap-5 px-20 pt-10">
        <div className="flex items-center justify-center aspect-square bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl">
            Starting Out
        </div>
        <div className="flex items-center justify-center aspect-square bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl">
            Dashboard
        </div>
        <div className="flex items-center justify-center aspect-square bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl">
            Appointments
        </div>
        <div className="flex items-center justify-center aspect-square bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl">
            Invoices
        </div>
        <div className="flex items-center justify-center aspect-square bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl">
            Problems
        </div>
        <div className="flex items-center justify-center aspect-square bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl">
            Starting Out
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
