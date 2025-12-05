import { useState } from "react";
import {
  testListData,
  TestDefinition,
  TestParameter,
  ParameterResult,
} from "@/data/DemoData";

interface LabResultRowProps {
  testId: number;
}

export default function LabResultRow({ testId }: LabResultRowProps) {
  const test: TestDefinition | undefined = testListData.find(
    (t) => t.testId === testId
  );

  if (!test) return <div>Invalid Test ID</div>;

  const multipleParams = test.parameters && test.parameters.length > 1;

  return (
    <div className="space-y-2">
      {multipleParams && (
        <div className="font-bold text-sm pl-2 pt-4">{test.name}</div>
      )}

      {test.parameters && test.parameters.length > 0
        ? test.parameters.map((param) => (
            <ParameterRow key={param.parameterId} param={param} />
          ))
        : (
          <ParameterRow
            param={{
              parameterId: String(test.testId),
              name: test.name,
              resultType: test.resultType,
            }}
          />
        )
      }
    </div>
  );
}

// ------------------- Single Parameter Row -------------------

function ParameterRow({ param }: { param: TestParameter }) {
  const [result, setResult] = useState<ParameterResult>({
    value: null,
    unit: param.units?.[0]?.unit ?? null,
  });

  const [remarks, setRemarks] = useState<string[]>([]);

  const handleValueChange = (val: number | string | boolean | null) => {
    setResult({ ...result, value: val });
  };

  const handleUnitChange = (unit: string) => {
    setResult({ ...result, unit });
  };

  const addRemark = () => {
    setRemarks([...remarks, ""]);
  };

  const updateRemark = (index: number, value: string) => {
    const updated = [...remarks];
    updated[index] = value;
    setRemarks(updated);
  };

  return (
    <div className="bg-white rounded-xl p-2 space-y-2 px-4 pt-4">
      {/* Main row */}
      <div className="grid grid-cols-[25%_15%_15%_20%] gap-4 items-center text-sm">
        {/* Test / Parameter Name */}
        <div>{param.name}</div>

        {/* Value */}
        <div>
          {param.resultType === "numeric" || param.resultType === "text" ? (
            <input
              type={param.resultType === "numeric" ? "number" : "text"}
              placeholder="Value"
              value={
                result.value === null
                  ? ""
                  : typeof result.value === "boolean"
                  ? String(result.value)
                  : result.value
              }
              onChange={(e) =>
                handleValueChange(
                  param.resultType === "numeric"
                    ? Number(e.target.value)
                    : e.target.value
                )
              }
              className="h-10 px-3 border border-neutral-300 rounded-xl w-full"
            />
          ) : param.resultType === "boolean" ? (
            <select
              value={result.value === null ? "" : String(result.value)}
              onChange={(e) => handleValueChange(e.target.value === "true")}
              className="h-10 px-3 border border-neutral-300 rounded-xl w-full"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="true">Positive</option>
              <option value="false">Negative</option>
            </select>
          ) : param.resultType === "image" ? (
            <input
              type="file"
              accept="image/*"
              className="h-10 px-3 border border-neutral-300 rounded-xl w-full"
            />
          ) : (
            <div>—</div>
          )}
        </div>

        {/* Unit */}
        <div>
          {param.units ? (
            <select
              value={result.unit ?? ""}
              onChange={(e) => handleUnitChange(e.target.value)}
              className="h-10 px-3 border border-neutral-300 rounded-xl w-full"
            >
              <option value="" disabled>
                Unit
              </option>
              {param.units.map((u) => (
                <option key={u.unit} value={u.unit}>
                  {u.unit}
                </option>
              ))}
            </select>
          ) : (
            <div>—</div>
          )}
        </div>

        {/* Reference */}
        <div className="text-neutral-600">
          {result.unit
            ? param.units?.find((u) => u.unit === result.unit)?.normalRange
            : "—"}
        </div>
      </div>

      {/* Remarks Section */}
      <div className="space-y-1">
        {remarks.map((r, i) => (
          <input
            key={i}
            type="text"
            placeholder="Remark"
            value={r}
            onChange={(e) => updateRemark(i, e.target.value)}
            className="h-10 px-3 border border-neutral-300 rounded-xl w-full text-sm"
          />
        ))}
      </div>

      {/* Add Remark Button */}
      <div className="text-right">
        <button
          onClick={addRemark}
          className="text-blue-600 text-sm hover:underline"
        >
          + Add Remark
        </button>
      </div>
    </div>
  );
}
