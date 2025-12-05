"use client";
import React from "react";

const LabReport = () => {
  const institute = {
    name: "KolKata Diagnostic Center",
    address: "123 Lab Street, Kolkata, India",
    phone: "+91 98765 43210",
    email: "info@kdc.com",
    website: "www.kdc.com",
  };

  const patient = {
    name: "John Doe",
    age: 32,
    gender: "Male",
    phone: "+91 98765 43210",
  };

  const caseDetails = {
    caseId: 12345,
    date: "02 Dec 2025",
    doctor: "Dr. Jane Smith",
  };

  const results = [
    { test: "Complete Blood Count (CBC)", value: "14.5", unit: "g/dL", reference: "13 - 17" },
    { test: "Thyroid Panel (TSH)", value: "3.2", unit: "mIU/L", reference: "0.5 - 4.5" },
    { test: "Vitamin D (25-OH)", value: "32", unit: "ng/mL", reference: "30 - 100" },
  ];

  const remarks =
    "Patient shows normal CBC and Thyroid values. Vitamin D is slightly low; consider supplementation.";

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        border: "1px solid #ccc",
        fontFamily: "Arial, sans-serif",
        color: "#000",
        padding: "16px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#1e3a8a",
          color: "#fff",
          padding: "16px",
          marginBottom: "16px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>{institute.name}</h1>
          <p style={{ margin: "4px 0", fontSize: "12px" }}>{institute.address}</p>
          <p style={{ margin: "4px 0", fontSize: "12px" }}>
            Phone: {institute.phone} | Email: {institute.email}
          </p>
          <p style={{ margin: "4px 0", fontSize: "12px" }}>Website: {institute.website}</p>
        </div>
        <div style={{ fontWeight: "bold", fontSize: "18px", alignSelf: "center" }}>LAB REPORT</div>
      </div>

      {/* Patient & Case Details */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "8px" }}>Patient Details</h2>
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Phone:</strong> {patient.phone}</p>
        </div>
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "8px" }}>Case Details</h2>
          <p><strong>Case ID:</strong> {caseDetails.caseId}</p>
          <p><strong>Date:</strong> {caseDetails.date}</p>
          <p><strong>Doctor:</strong> {caseDetails.doctor}</p>
        </div>
      </div>

      {/* Lab Results */}
      <div>
        <h2 style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "8px" }}>Lab Results</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "12px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f3f3f3" }}>
              <th style={{ border: "1px solid #ccc", padding: "4px", textAlign: "left" }}>Test Name</th>
              <th style={{ border: "1px solid #ccc", padding: "4px", textAlign: "center" }}>Value</th>
              <th style={{ border: "1px solid #ccc", padding: "4px", textAlign: "center" }}>Unit</th>
              <th style={{ border: "1px solid #ccc", padding: "4px", textAlign: "center" }}>Reference</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, idx) => (
              <tr
                key={idx}
                style={{ backgroundColor: idx % 2 === 0 ? "#fff" : "#f9f9f9" }}
              >
                <td style={{ border: "1px solid #ccc", padding: "4px" }}>{r.test}</td>
                <td style={{ border: "1px solid #ccc", padding: "4px", textAlign: "center" }}>{r.value}</td>
                <td style={{ border: "1px solid #ccc", padding: "4px", textAlign: "center" }}>{r.unit}</td>
                <td style={{ border: "1px solid #ccc", padding: "4px", textAlign: "center" }}>{r.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Remarks */}
      <div style={{ marginTop: "16px" }}>
        <h2 style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "4px" }}>Remarks</h2>
        <p style={{ fontSize: "12px" }}>{remarks}</p>
      </div>

      {/* Footer */}
      <div style={{ marginTop: "16px", fontSize: "10px" }}>
        <p>Note: The above results are for informational purposes only and should be interpreted by a qualified medical professional.</p>
        <p>Lab Technician: ____________________</p>
        <p>Authorized Signatory: ____________________</p>
      </div>
    </div>
  );
};

export default LabReport;
