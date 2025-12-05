import { DemoProvider } from "@/context/DemoProvider";
import Link from "next/link";
import React from "react";
import { FaAsterisk } from "react-icons/fa6";
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineExclamation,
  HiOutlineClock,
} from "react-icons/hi";
import {
  HiOutlineChevronRight,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

const Dashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <DemoProvider>
      <div className="fixed inset-0 bg-neutral-200 z-50 flex items-center justify-center text-black/30 xl:hidden">
        THIS IS A DESKTOP APPLICATION. PLEASE RESTORE SCREEN.
      </div>

      <div className="flex min-h-screen">
        <div className="flex flex-col bg-blue-900 min-w-60 w-60">
          <div className="sticky top-0">
            <div className="px-4 h-20 flex items-center font-black text-white">
              <img src="/img/PR-Icon.png" className="h-14 grayscale" />
            </div>
            <div className="px-4 py-8">
              <Link href="/case/new">
                <button className="bg-white text-black w-full h-10 rounded-xl cursor-pointer">
                  New Case
                </button>
              </Link>
            </div>
            <ul className="flex flex-col [&>li]:flex [&>li]:items-center [&>li]:px-4 [&>li]:h-10 [&>li]:rounded-xl space-y-4 [&>li]:bg-blue-200 px-4 pt-2 uppercase text-sm">
              <li>
                <Link
                  className="w-full h-full flex items-center"
                  href={"/dashboard"}
                >
                  {" "}
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="w-full h-full flex items-center"
                  href={"/case"}
                >
                  {" "}
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  className="w-full h-full flex items-center"
                  href={"/units"}
                >
                  {" "}
                  Units
                </Link>
              </li>
              <li>
                <Link
                  className="w-full h-full flex items-center"
                  href={"/billing"}
                >
                  {" "}
                  Billing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col grow">
          <div className="px-8 h-14 bg-blue-900 w-full flex items-center justify-between">
            <div className="text-white space-x-2 flex items-center">
              <span>ABC Diagnosis Centre</span>
              <HiOutlineChevronRight />
              <span>Dashboard</span>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="w-67 bg-white h-9 rounded-xl flex">
                <div className="h-full w-8 justify-center flex items-center">
                  <HiOutlineMagnifyingGlass />
                </div>
              </div>
              <div className="text-neutral-300 text-sm">
                <Link href={"/help"} target="_blank">
                  HELP
                </Link>
              </div>
            </div>
          </div>
          {/* MAIN */}
          <div className="">{children}</div>
        </div>
      </div>
    </DemoProvider>
  );
};

export default Dashboard;
