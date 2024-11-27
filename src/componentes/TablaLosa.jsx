import React, { useState } from "react";

const TablaLosa = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  // Valores de la tabla
  const headers = ["Elemento", "Simplemente apoyadas", "Un extremo continuo", "Ambos extremos continuos", "En voladizo"];
  const rows = ["Losa maciza unidireccional", "Viga o losa nervada unidireccional"];
  const initialValues = [
    [20, 24, 28, 10],
    [16, 18.5, 21, 8]
  ];

  // Manejar clic en celda
  const handleCellClick = (value) => {
    setSelectedValue(value); // Actualizar estado local
    onValueChange(value); // Informar al componente padre
  };

  return (
    <div className="text-center">
      <h3>Predimensionado de losa</h3>
      <table border="1" style={{ margin: "0 auto", textAlign: "center" }}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>{row}</th>
              {initialValues[rowIndex].map((value, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleCellClick(value)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: selectedValue === value ? "#d3d3d3" : "white",
                  }}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaLosa;