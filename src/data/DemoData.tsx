// =====================
// TYPES
// =====================

export type ResultType =
  | "numeric"       // measurable number
  | "text"          // free text / comments
  | "boolean"       // positive / negative
  | "image"         // file upload: x-ray, ultrasound
  | "panel"         // multi-parameter test
  | "micro-culture"; // organism + sensitivity report

export interface UnitReferenceMap {
  unit: string;                 // e.g. g/dL
  normalRange?: string;         // e.g. 13-17
  referenceMap?: Record<string, string>; // converted ranges per unit
}

export interface ParameterResult {
  value: number | string | boolean | null;
  unit?: string | null;
  note?: string;
}

export interface TestParameter {
  parameterId: string; // unique inside test, ex: "hemoglobin"
  name: string;
  resultType: ResultType;
  units?: UnitReferenceMap[];   // numeric only
  notes?: string;               // optional interpretation comments
  results?: ParameterResult[];  // support multiple results
}

export interface TestDefinition {
  testId: number;
  name: string;
  category: string; // Pathology, Microbiology, Radiology...
  price: number;
  resultType: ResultType;   // if panel → "panel"
  parameters?: TestParameter[]; // only for panel tests
}

// =====================
// TEST DATA
// =====================

export const testListData: TestDefinition[] = [
  // -------------------------------
  // 1. CBC
  // -------------------------------
  {
    testId: 1,
    name: "Complete Blood Count (CBC)",
    category: "Pathology",
    price: 450,
    resultType: "panel",
    parameters: [
      {
        parameterId: "hemoglobin",
        name: "Hemoglobin",
        resultType: "numeric",
        units: [
          {
            unit: "g/dL",
            normalRange: "13-17",
            referenceMap: { "g/dL": "13-17", "g/L": "130-170", "mmol/L": "8.1-10.5" }
          }
        ],
        results: []
      },
      {
        parameterId: "hematocrit",
        name: "Hematocrit (PCV)",
        resultType: "numeric",
        units: [{ unit: "%", normalRange: "40-50" }],
        results: []
      },
      {
        parameterId: "wbc",
        name: "Total WBC Count",
        resultType: "numeric",
        units: [{ unit: "cells/mcL", normalRange: "4000-11000" }],
        results: []
      },
      {
        parameterId: "platelets",
        name: "Platelet Count",
        resultType: "numeric",
        units: [{ unit: "cells/mcL", normalRange: "150000-450000" }],
        results: []
      }
    ]
  },

  // -------------------------------
  // 2. ESR
  // -------------------------------
  {
    testId: 2,
    name: "ESR",
    category: "Pathology",
    price: 200,
    resultType: "numeric",
    parameters: [
      {
        parameterId: "esr",
        name: "ESR",
        resultType: "numeric",
        units: [{ unit: "mm/hr", normalRange: "0-20" }],
        results: []
      }
    ]
  },

  // -------------------------------
  // 3. HbA1c
  // -------------------------------
  {
    testId: 3,
    name: "HbA1c",
    category: "Pathology",
    price: 450,
    resultType: "numeric",
    parameters: [
      {
        parameterId: "hba1c",
        name: "HbA1c %",
        resultType: "numeric",
        units: [{ unit: "%", normalRange: "< 5.7" }],
        results: []
      }
    ]
  },

  // -------------------------------
  // 4. Blood Grouping
  // -------------------------------
  {
    testId: 4,
    name: "Blood Grouping & Rh Typing",
    category: "Pathology",
    price: 250,
    resultType: "text"
  },

  // -------------------------------
  // 5. Urine Analysis
  // -------------------------------
  {
    testId: 5,
    name: "Urine Analysis",
    category: "Pathology",
    price: 300,
    resultType: "panel",
    parameters: [
      { parameterId: "color", name: "Color", resultType: "text", results: [] },
      { parameterId: "appearance", name: "Appearance", resultType: "text", results: [] },
      { parameterId: "ph", name: "pH", resultType: "numeric", units: [{ unit: "", normalRange: "4.6-8.0" }], results: [] },
      { parameterId: "protein", name: "Protein", resultType: "boolean", results: [] },
      { parameterId: "glucose", name: "Glucose", resultType: "boolean", results: [] }
    ]
  },

  // -------------------------------
  // 7. LFT
  // -------------------------------
  {
    testId: 7,
    name: "Liver Function Test (LFT)",
    category: "Pathology",
    price: 650,
    resultType: "panel",
    parameters: [
      { parameterId: "bilirubin_total", name: "Total Bilirubin", resultType: "numeric", units: [{ unit: "mg/dL", normalRange: "0.1-1.2" }], results: [] },
      { parameterId: "bilirubin_direct", name: "Direct Bilirubin", resultType: "numeric", units: [{ unit: "mg/dL", normalRange: "0-0.3" }], results: [] },
      { parameterId: "ast", name: "AST (SGOT)", resultType: "numeric", units: [{ unit: "U/L", normalRange: "10-40" }], results: [] },
      { parameterId: "alt", name: "ALT (SGPT)", resultType: "numeric", units: [{ unit: "U/L", normalRange: "7-56" }], results: [] },
      { parameterId: "alp", name: "Alkaline Phosphatase", resultType: "numeric", units: [{ unit: "U/L", normalRange: "44-147" }], results: [] }
    ]
  },

  // -------------------------------
  // 10. Electrolytes
  // -------------------------------
  {
    testId: 10,
    name: "Electrolyte Panel",
    category: "Pathology",
    price: 400,
    resultType: "panel",
    parameters: [
      { parameterId: "sodium", name: "Sodium", resultType: "numeric", units: [{ unit: "mmol/L", normalRange: "135-145" }], results: [] },
      { parameterId: "potassium", name: "Potassium", resultType: "numeric", units: [{ unit: "mmol/L", normalRange: "3.5-5.0" }], results: [] },
      { parameterId: "chloride", name: "Chloride", resultType: "numeric", units: [{ unit: "mmol/L", normalRange: "98-107" }], results: [] }
    ]
  },

  // -------------------------------
  // 25. Thyroid Panel
  // -------------------------------
  {
    testId: 25,
    name: "Thyroid Panel (T3, T4, TSH)",
    category: "Pathology",
    price: 500,
    resultType: "panel",
    parameters: [
      { parameterId: "t3", name: "T3", resultType: "numeric", units: [{ unit: "ng/dL", normalRange: "80-200" }], results: [] },
      { parameterId: "t4", name: "T4", resultType: "numeric", units: [{ unit: "µg/dL", normalRange: "5.0-12.0" }], results: [] },
      { parameterId: "tsh", name: "TSH", resultType: "numeric", units: [{ unit: "µIU/mL", normalRange: "0.4-4.0" }], results: [] }
    ]
  },

  // -------------------------------
  // Radiology — image
  // -------------------------------
  { testId: 49, name: "Chest X-Ray", category: "Radiology", price: 500, resultType: "image" },
  { testId: 50, name: "Ultrasound Abdomen", category: "Radiology", price: 1200, resultType: "image" },

  // -------------------------------
  // Cardiology — ECG
  // -------------------------------
  { testId: 51, name: "ECG", category: "Cardiology", price: 350, resultType: "image" },

  // -------------------------------
  // Microbiology — culture
  // -------------------------------
  { testId: 33, name: "Culture & Sensitivity (Urine)", category: "Microbiology", price: 650, resultType: "micro-culture" }
];
