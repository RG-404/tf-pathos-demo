// TEST ITEM
export type TestItemType = {
  testId: number;
  name: string;
  unit: string;
  price: number;
};

// CASE LINE ITEM
export type CaseLineItemType = {
  caseId: number;
  subjectName: string;
  tests: number[]; // store testIds instead of strings
};

// CASE ITEM
export type CaseItemType = {
  caseId: number;
  subjectName: string;
  subjectPhoneNumber: string;
  attendee?: string;
  test: number[]; // store testIds
  amount: number;
  paymentType: "prepaid" | "partial" | "postpaid";
  paymentLog: {
    cash: number;
    upi: number;
    upiRef: string;
    bank: number;
    bankRef: string;
    time: string;
  }[];
};
