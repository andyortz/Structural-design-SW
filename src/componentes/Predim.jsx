import React, { useEffect, useState } from "react";
const Predim = () => {
    const [numerator, setNumerator] = useState(""); // Para el numerador
    const [denominator, setDenominator] = useState(""); // Para el denominador
    const [resultMessage, setResultMessage] = useState("");      
    const handleCheck = () => {
        const num = parseFloat(numerator);
        const denom = parseFloat(denominator);
    
        if (!denom) {
            setResultMessage("El denominador no puede ser 0.");
            return;
        }
        const result = num / denom;
        if (result <= 2) {
            setResultMessage(`(${result.toFixed(2)}) Entonces se armará en 2 direcciones.`);
        } else {
            setResultMessage(`(${result.toFixed(2)}) Entonces se armará en 1 dirección.`);
        }
    };
    return (

        <div className="text-center">
        <h2>DIRECCION DEL ARMADO DE LA LOSA :</h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ marginRight: "10px", fontWeight: "bold" }}>ε =</span>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input
                type="number"
                step="any"
                placeholder="Numerador"
                value={numerator}
                onChange={(e) => setNumerator(e.target.value)}
                style={{ width: "80px", textAlign: "center", marginBottom: "5px" }}
            />
            <input
                type="number"
                step="any"
                placeholder="Denominador"
                value={denominator}
                onChange={(e) => setDenominator(e.target.value)}
                style={{ width: "80px", textAlign: "center" }}
            />
            </div>
            <button
            onClick={handleCheck}
            style={{
                marginLeft: "10px",
                padding: "5px 10px",
                cursor: "pointer",
            }}
            >
            Comprobar
            </button>
        </div>
        {resultMessage && <p style={{ marginTop: "20px" }}>{resultMessage}</p>}
    </div>
    );
};
export default Predim;