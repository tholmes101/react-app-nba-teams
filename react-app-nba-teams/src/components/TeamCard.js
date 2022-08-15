import React, { useState } from "react";


function TeamCard({ team, onDeleteTeam, onUpdateTeam }) {
  const { id, name, image, rank } = team;

  const [Likes, setLikes] = useState(true);
  const [updatedRank, setUpdatedRank] = useState(rank);

  function handleToggleLikes() {
    setLikes((Likes) => !Likes);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/teams/${id}`, {
      method: "DELETE",
    });

    onDeleteTeam(id);
  }

  function handleRankFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/teams/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rank: updatedRank }),
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
      <p>Rank #: {rank}</p>
      {Likes ? (
        <button className="primary" onClick={handleToggleLikes}>
          Like
        </button>
      ) : (
        <button onClick={handleToggleLikes}>UnLike</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
      <form onSubmit={handleRankFormSubmit}>
        <input
          type="number"
          step="0"
          placeholder="New rank..."
          value={updatedRank}
          onChange={(e) => setUpdatedRank(parseFloat(e.target.value))}
        />
        <button type="submit">Update Rank #</button>
      </form>
      </li>
  
  );
}

export default TeamCard;