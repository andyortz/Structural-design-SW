import React, { useState } from "react";

const Peralte = ({ denominador }) => {
  const [numerador, setNumerador] = useState(""); // Estado para el numerador
  const [resultado, setResultado] = useState(null);

  const handleCalculate = () => {
    const num = parseFloat(numerador);

    if (isNaN(num)) {
      setResultado("Por favor, ingresa un numerador válido.");
      return;
    }

    if (denominador === 0) {
      setResultado("El denominador no puede ser 0.");
      return;
    }

    const division = num / denominador;
    setResultado(`h adopta =  ${division.toFixed(2)}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>Dimensionado de Altura del Peralte</h3>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ marginRight: "10px", fontWeight: "bold" }}>h =</span>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <input
            type="number"
            step="any"
            placeholder="Numerador"
            value={numerador}
            onChange={(e) => setNumerador(e.target.value)}
            style={{ width: "80px", textAlign: "center", marginBottom: "5px" }}
          />
          <input
            type="number"
            value={denominador}
            readOnly
            style={{
              width: "80px",
              textAlign: "center",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          onClick={handleCalculate}
          style={{
            marginLeft: "10px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
        >
          Calcular
        </button>
      </div>
      {resultado && <p style={{ marginTop: "20px" }}>{resultado}</p>}
    </div>
  );
};

export default Peralte;
