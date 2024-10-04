import React, { useState, useEffect } from "react";
//import { helpTextStartUp } from "../../utils/helpText.js";
//import { fetchStatus, fetchEnable } from "../../utils/api";

export default function Viga() {
  const [enableBoot, setEnableBoot] = useState("");
  const [status, setStatus] = useState("");
  const [selectedValue, setSelectedValue] = useState("optrbt4");

//   useEffect(() => {
//     const fetchInitialStatus = async () => {
//       try {
//         const data = await fetchEnable();
//         setEnableBoot(data.status); ç
//       } catch (error) {
//         console.error("Error fetching initial status:", error);
//       }
//     };
//     fetchInitialStatus();
//   }, []);

//   const handleRadioChange = (e) => {
//     setSelectedValue(e.target.id);
//   };
//   const handleRadioChange2 = (e) => {
//     setEnableBoot(e.target.id);
//   };
  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10 bg-white h-screen">
        <h1 className="text-2xl font-extrabold">DIMENSIONADO DEL ARMADO DE LA LOSA</h1>
        <div className="flex space-x-4">
          <div>Current status:</div>
        </div>  
      </section>
    </>
  );
}