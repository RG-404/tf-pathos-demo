"use client";
import { useState, useCallback, useRef } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Import your LabReport component
import LabReport from "@/components/Report";

// Define the node data type for your custom node
type LabReportNodeData = {};

const initialNodes: Node<LabReportNodeData>[] = [
  { id: "report", position: { x: 300, y: 0 }, data: {}, type: "labReport" },
];
const initialEdges: Edge[] = [];

export default function ReportFlowSheet() {
  const [nodes, setNodes] = useState<Node<LabReportNodeData>[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  // Ref for hidden LabReport for PDF export
  const reportRef = useRef<HTMLDivElement>(null);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  // Download LabReport as PDF
  const downloadPDF = async () => {
    if (!reportRef.current) return;
    const canvas = await html2canvas(reportRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("LabReport.pdf");
  };

  // Node Types
  const nodeTypes = {
    labReport: () => <LabReport />, // No ref inside ReactFlow
  };

  return (
    <div
      style={{ padding: "16px", backgroundColor: "#fff", borderRadius: "8px" }}
      className="relative"
    >
      <button onClick={downloadPDF} className="absolute right-4 h-10 rounded-xl z-50 bg-blue-800 text-white px-3 text-sm uppercase">Download</button>

      {/* Hidden LabReport for PDF */}
      <div
        ref={reportRef}
        style={{
          position: "absolute",
          top: -9999,
          left: -9999,
        }}
      >
        <LabReport />
      </div>

      <div style={{ width: "100%", height: "600px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodeTypes={nodeTypes}
        />
      </div>
    </div>
  );
}
