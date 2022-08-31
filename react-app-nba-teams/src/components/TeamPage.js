import React, { useEffect, useState } from "react";
import NewTeamForm from "./NewTeamForm";
import TeamList from "./TeamList";
import Search from "./Search";

function TeamPage() {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/teams")
      .then((r) => r.json())
      .then((teamsArray) => {
        setTeams(teamsArray);
      });
  }, []);

  function handleAddTeam(newTeam) {
    const updatedTeamsArray = [...teams, newTeam];
    setTeams(updatedTeamsArray);
  }

  function handleDeleteTeam(id) {
    const updatedTeamsArray = teams.filter((team) => team.id !== id);
    setTeams(updatedTeamsArray);
  }

  function handleUpdateTeam(updatedTeam) {
    const updatedTeamsArray = teams.map((team) => {
      if (team.id === updatedTeam.id) {
        return updatedTeam;
      } else {
        return team;
      }
    });
    setTeams(updatedTeamsArray);
  }

 const displayedTeams = teams.filter((team) => {
   return team.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewTeamForm onAddTeam={handleAddTeam} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TeamList
        teams={displayedTeams}
        onDeleteTeam={handleDeleteTeam}
        onUpdateTeam={handleUpdateTeam}
      />
    </main>
  );
}

export default TeamPage;