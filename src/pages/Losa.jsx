import React, { useState, useEffect } from "react";
//import { helpTextStartUp } from "../../utils/helpText.js";
//import { fetchStatus, fetchEnable } from "../../utils/api";
import Predim from "../componentes/Predim";
import TablaLosa from "../componentes/TablaLosa";
import Peralte from "../componentes/Peralte";

export default function Losa() {
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
    const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value); // Actualizar estado global
  };

  return (
    <>
      <section className="space-y-4 mt-14 py-14 px-10 bg-white h-screen">
        <h1 className="text-2xl font-extrabold">DIMENSIONADO DEL ARMADO DE LA LOSA</h1>
        <div className="">
          <Predim/>
          <TablaLosa onValueChange={handleValueChange} />
        </div>  
        <Peralte denominador={selectedValue} />
      </section>
    </>
  );
}