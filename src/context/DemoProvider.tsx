"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { TestItemType, CaseItemType, CaseLineItemType } from "@/types/CoreData";

type DemoContextType = {
  count: number;
  pending: number;
  booking: number;
  operatingUnits: number;
  problemsCount: number;
  caseList: CaseItemType[];
  getCaseLines: () => CaseLineItemType[];
  createCase: (newCase: Omit<CaseItemType, "caseId">) => void;
  increment: () => void;
  decrement: () => void;
};

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  // DASHBOARD PAGE
  const [pending, setPending] = useState<number>(0);
  const [booking, setBooking] = useState<number>(0);
  const [operatingUnits, setOperatingUnits] = useState<number>(0);
  const [problemsCount, setProblemsCount] = useState<number>(0);

  // CASE
  const [caseList, setCaseList] = useState<CaseItemType[]>([]);

  // CREATE CASE (tests as numbers)
  const createCase = (newCase: Omit<CaseItemType, "caseId">) => {
    setCaseList((current) => {
      const nextCaseId =
        current.length > 0 ? Math.max(...current.map((c) => c.caseId)) + 1 : 1;
      return [...current, { caseId: nextCaseId, ...newCase }];
    });
  };

  const getCaseLines = (): CaseLineItemType[] => {
    return caseList.map((item) => ({
      caseId: item.caseId,
      subjectName: item.subjectName,
      tests: item.test, // now an array of testIds
    }));
  };

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <DemoContext.Provider
      value={{
        count,
        increment,
        decrement,
        pending,
        caseList,
        booking,
        operatingUnits,
        problemsCount,
        createCase,
        getCaseLines,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemoContext() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemoContext must be used inside DemoProvider");
  return ctx;
}
