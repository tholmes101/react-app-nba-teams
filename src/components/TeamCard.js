import React, { useState } from "react";

function TeamCard({ team, onDeleteTeam, onUpdateTeam }) {
  const { id, name, image, price } = team;

  const [isInStock, setIsInStock] = useState(true);
  //const [updatedPrice, setUpdatedPrice] = useState(price);

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/teams/${id}`, {
      method: "DELETE",
    });

    onDeleteTeam(id);
  }

  function handlePriceFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/teams/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify//({ price: updatedPrice }),
    })
      .then((r) => r.json())
      .then((updatedTeam) => {
        onUpdateTeam(updatedTeam);
      });
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default TeamCard;