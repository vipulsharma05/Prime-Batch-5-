import React from 'react'

const cardStyle = {
    backgroundColor:"yellow"
}
const Card = ({ title, text }) => {
    return (
      <div style={cardStyle}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    );
  };
  
  
  
export default Card
