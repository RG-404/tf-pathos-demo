"use client";
import { useDemoContext } from "@/context/DemoProvider";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAsterisk } from "react-icons/fa6";
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineExclamation,
  HiOutlineClock,
} from "react-icons/hi";
import { HiOutlineMagnifyingGlass, HiOutlinePlus } from "react-icons/hi2";

import { CaseLineItemType } from "@/types/CoreData";

const CasePage = () => {
  const { getCaseLines, caseList } = useDemoContext();

  const [lines, setLines] = useState<CaseLineItemType[]>([]);

  useEffect(() => {
    const newLines = getCaseLines();
    setLines(newLines);
  }, [caseList]);

  return (
    <div className="p-8">
      {/* MAIN */}
      <div className="uppercase mb-5">Cases</div>
      <div className="flex w-full space-x-12">
        <div className="w-2/3">
          <div className="flex flex-col space-y-2">
            <div className="flex h-12 bg-yellow-700 items-center px-5 text-white rounded-xl font-bold">
              <div className="w-1/3">Number</div>
              <div className="w-1/3">Name</div>
              <div className="w-1/3">Order Items</div>
            </div>

            {lines.length === 0 && (
              <div className="flex justify-center items-center h-44 uppercase text-neutral-400 bg-neutral-100 border border-neutral-300 rounded-xl">
                No Cases
              </div>
            )}

            {lines.map((caseItem: CaseLineItemType) => (
              <Link href={`/case/${caseItem.caseId}`} key={`case-item-${caseItem.caseId}`}>
                <div className="flex h-12 bg-orange-100 items-center px-5 rounded-xl cursor-pointer hover:bg-orange-200 transition-all">
                  <div className="w-1/3">{caseItem.caseId}</div>
                  <div className="w-1/3 font-bold">{caseItem.subjectName}</div>
                  <div className="w-1/3 truncate" title={caseItem.tests.join(", ")}>{caseItem.tests.join(", ")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-1/3 relative">
          <div className="sticky top-12">
            <input
              className="w-full h-12 px-4 flex justify-start items-center border-neutral-400 border mb-4 rounded-xl"
              placeholder="Search Appointments"
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

export default CasePage;
