import React from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css'; // esta es la ruta

const ColorPalette = ({ colors, onDeleteColor }) => {
  return (
    <div className="card-container">
      {colors.map((color, index) => (
        <Card
          key={index}
          className="color-card"
          style={{ backgroundColor: color.value }}
          onClick={() => onDeleteColor(index)}
        >
          <span style={{ color: 'white', fontSize: '1.2rem' }}>{color.name}</span>
        </Card>
      ))}
    </div>
  );
};

export default ColorPalette;
