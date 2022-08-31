import React from "react";
import TeamCard from "./TeamCard";
import {Card} from "semantic-ui-react"

function TeamList({ teams, onDeleteTeam, onUpdateTeam,uniforms }) {
  return (
     <Card.Group itemsPerRow = {4} 
     className="cards">
      {teams.map((team) => {
        return (
          <TeamCard
            key={team.id}
            team={team}
            uniform={team.uniforms}
            onDeleteTeam={onDeleteTeam}
            onUpdateTeam={onUpdateTeam}
          />
        );
      })}
    </Card.Group>
  );
}

export default TeamList;