import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ColorName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DeleteButton = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
`;

const ColorCard = ({ color, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(color.name);
  };

  return (
    <CardContainer style={{ backgroundColor: color.value }}>
      <ColorName>{color.name}</ColorName>
      <DeleteButton onClick={handleDeleteClick}>Borrar</DeleteButton>
    </CardContainer>
  );
};

export default ColorCard;