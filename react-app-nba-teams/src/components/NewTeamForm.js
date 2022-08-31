import React, { useState } from "react";

function NewTeamForm({ onAddTeam }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rank, setRank] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        rank: rank,
      }),
    })
      .then((r) => r.json())
      .then((newTeam) => onAddTeam(newTeam));
  }

  return (
    <div className="new-team-form">
      <h2>New Team</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Team name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="rank"
          step="0"
          placeholder="Rank"
          value={rank}
          onChange={(e) => setRank(parseFloat(e.target.value))}
        />
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
}

export default NewTeamForm;