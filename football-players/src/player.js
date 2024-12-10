// src/Player.js
import React from "react";
import { Card } from "react-bootstrap";
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    width: "19rem",
    margin: "1rem",
    boxShadow: "0 40px 80px rgba(0, 0, 0, 0.2)",
    
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {team}
          <br />
          <strong>Nationalité :</strong> {nationality}
          <br />
          <strong>Numéro :</strong> {jerseyNumber}
          <br />
          <strong>Âge :</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};



// Définir des valeurs par défaut pour les props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
