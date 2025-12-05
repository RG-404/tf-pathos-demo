"use client";

import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowRightEndOnRectangle,
} from "react-icons/hi2";
import Link from "next/link";

export default function CaseDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <div className="flex h-[calc(100vh-3.5rem)] bg-neutral-100">
      {/* LEFT */}
      <div className="w-1/2 p-8 overflow-y-scroll">
        <div className="mb-8 uppercase text-2xl font-medium">Radiology</div>
        <div className="grid grid-cols-3 gap-5 mb-8">
          <div className="h-40 bg-linear-to-b to-green-600  from-green-800 flex flex-col justify-between py-5 px-5 text-white rounded-xl">
            <div className="text-4xl">12</div>
            <div>READY</div>
          </div>
          <div className="h-40 bg-linear-to-b to-violet-600 from-violet-800 flex flex-col justify-between py-5 px-5 text-white rounded-xl">
            <div className="text-4xl">12</div>
            <div>PENDING</div>
          </div>
          <div className="h-40 bg-linear-to-b to-neutral-600 from-neutral-800 flex flex-col justify-between py-5 px-5 text-white rounded-xl">
            <div className="text-4xl">20%</div>
            <div>CAPACITY</div>
          </div>
        </div>
        <div className="mb-4">Problems</div>
        <div className="h-44 w-full bg-neutral-50 border border-neutral-200 rounded-xl">
          <div className="w-full h-full flex items-center justify-center text-xs uppercase text-neutral-400">
            No problems reported
          </div>
        </div>
        <div className="mt-8 mb-4">Test List</div>
        <div className="flex flex-col space-y-2">
          <div className="flex h-12 bg-yellow-700 items-center px-5 text-white rounded-xl font-bold">
            <div className="w-1/3">Name</div>
            <div className="w-1/3">Status</div>
          </div>
          <Link href={"/case/123123"}>
            <div className="flex h-12 bg-orange-100 items-center px-5 rounded-xl cursor-pointer hover:bg-orange-200 transition-all">
              <div className="w-1/3 font-bold">X-Ray</div>
              <div className="w-1/3">Active</div>
            </div>
          </Link>
        </div>
        <div className="mt-8 mb-4">Staff</div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-neutral-200 rounded-xl pt-6 pb-4 flex flex-col items-center justify-center space-y-4">
            <div className="aspect-square bg-white mx-6 p-5 rounded-full flex justify-center items-center">
              <HiOutlineUser className="h-6 w-6" />
            </div>
            <div className="text-center text-sm">Person</div>
          </div>
          <div className="bg-neutral-200 rounded-xl pt-6 pb-4 flex flex-col items-center justify-center space-y-4">
            <div className="aspect-square bg-white mx-6 p-5 rounded-full flex justify-center items-center">
              <HiOutlineUser className="h-6 w-6" />
            </div>
            <div className="text-center text-sm">Person</div>
          </div>
          <div className="bg-neutral-200 rounded-xl pt-6 pb-4 flex flex-col items-center justify-center space-y-4">
            <div className="aspect-square bg-white mx-6 p-5 rounded-full flex justify-center items-center">
              <HiOutlineUser className="h-6 w-6" />
            </div>
            <div className="text-center text-sm">Person</div>
          </div>
          <div className="bg-neutral-200 rounded-xl pt-6 pb-4 flex flex-col items-center justify-center space-y-4">
            <div className="aspect-square bg-white mx-6 p-5 rounded-full flex justify-center items-center">
              <HiOutlineUser className="h-6 w-6" />
            </div>
            <div className="text-center text-sm">Person</div>
          </div>
        </div>
        
      </div>
      <div className="w-1/2 p-8 bg-neutral-200">
        <div className="mb-4">Cases</div>
        <div className="space-y-2">
          <div className="flex bg-linear-to-t from-blue-800 to-blue-700 h-12 items-center rounded-xl text-white">
            <div className="px-4 w-1/2">ID</div>
            <div className="px-4 w-1/2">Subject Name</div>
            <div className="px-4 w-12"></div>
          </div>
          <div className="flex bg-white h-12 items-center rounded-xl">
            <div className="px-4 w-1/2">4233452</div>
            <div className="px-4 w-1/2">Mr. A Gogoi</div>
            <div className="px-4 w-12">
              <HiOutlineArrowRightEndOnRectangle />
            </div>
          </div>
          <div className="flex bg-white h-12 items-center rounded-xl">
            <div className="px-4 w-1/2">4233452</div>
            <div className="px-4 w-1/2">Mr. A Gogoi</div>
            <div className="px-4 w-12">
              <HiOutlineArrowRightEndOnRectangle />
            </div>
          </div>
          <div className="flex bg-white h-12 items-center rounded-xl">
            <div className="px-4 w-1/2">4233452</div>
            <div className="px-4 w-1/2">Mr. A Gogoi</div>
            <div className="px-4 w-12">
              <HiOutlineArrowRightEndOnRectangle />
            </div>
          </div>
          <div className="flex bg-white h-12 items-center rounded-xl">
            <div className="px-4 w-1/2">4233452</div>
            <div className="px-4 w-1/2">Mr. A Gogoi</div>
            <div className="px-4 w-12">
              <HiOutlineArrowRightEndOnRectangle />
            </div>
          </div>
          <div className="flex bg-white h-12 items-center rounded-xl">
            <div className="px-4 w-1/2">4233452</div>
            <div className="px-4 w-1/2">Mr. A Gogoi</div>
            <div className="px-4 w-12">
              <HiOutlineArrowRightEndOnRectangle />
            </div>
          </div>
          <div className="flex bg-white h-12 items-center rounded-xl">
            <div className="px-4 w-1/2">4233452</div>
            <div className="px-4 w-1/2">Mr. A Gogoi</div>
            <div className="px-4 w-12">
              <HiOutlineArrowRightEndOnRectangle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
