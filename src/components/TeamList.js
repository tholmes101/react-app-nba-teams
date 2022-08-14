import React from "react";
import TeamCard from "./TeamCard";

function TeamList({ teams, onDeleteTeam, onUpdateTeam }) {
  return (
    <ul className="cards">
      {teams.map((team) => {
        return (
          <TeamCard
            key={team.id}
            team={team}
            onDeleteTeam={onDeleteTeam}
            onUpdateTeam={onUpdateTeam}
          />
        );
      })}
    </ul>
  );
}

export default TeamList;