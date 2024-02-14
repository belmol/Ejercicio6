import React, { useState } from "react";
import "../App.css"; // Importa el archivo de estilos

const ColorForm = ({ onSave }) => {
  const [colorName, setColorName] = useState("");
  const [colorValue, setColorValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name: colorName, value: colorValue });
    setColorName("");
    setColorValue("");
  };

  return (
    <div className="color-form"> {/* Aplica la clase color-form */}
      <form onSubmit={handleSubmit} className="form-container"> {/* Aplica la clase form-container */}
        <div>
          <label htmlFor="colorName">Nombre del color:</label>
          <input
            id="colorName"
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="colorValue">Valor del color:</label>
          <input
            id="colorValue"
            type="color"
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
            required
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default ColorForm;
