import React, { useState } from "react";
import ColorForm from "../src/components/ColorForm";
import ColorPalette from "../src/components/ColorPalette";
import "./App.css"; // Importa el archivo de estilos

function App() {
  const [colors, setColors] = useState([]);

  const handleSaveColor = (color) => {
    setColors([...colors, color]); // Agregar el nuevo color al array de colores
  };

  const handleDeleteColor = (colorName) => {
    const updatedColors = colors.filter(color => color.name !== colorName); // Filtrar el color que se desea eliminar
    setColors(updatedColors); // Actualizar el array de colores
  };

  return (
    <div className="app-container"> {/* Aplica la clase app-container */}
      <ColorForm onSave={handleSaveColor} />
      <ColorPalette colors={colors} onDeleteColor={handleDeleteColor} /> {/* Pasar onDeleteColor como prop */}
    </div>
  );
}

export default App;
