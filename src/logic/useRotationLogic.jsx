// src/logic/useRotationLogic.js

import { useState } from 'react';

export default function useRotationLogic() {
  // If teamAServing = 1, Team A is serving; if 0, Team B is serving
  const [teamAServing, setTeamAServing] = useState(1);

  // Arrays for each team’s players
  const [teamAPlayers, setTeamAPlayers] = useState([1, 2, 3, 4, 5, 6]);
  const [teamBPlayers, setTeamBPlayers] = useState([7, 8, 9, 10, 11, 12]);

  // Rotate Team A (last -> front)
  function rotateTeamAClockwise() {
    setTeamAPlayers((prev) => {
      const arr = [...prev];
      const last = arr.pop();
      arr.unshift(last);
      return arr;
    });
  }

  // Rotate Team B (last -> front)
  function rotateTeamBClockwise() {
    setTeamBPlayers((prev) => {
      const arr = [...prev];
      const last = arr.pop();
      arr.unshift(last);
      return arr;
    });
  }

  // Handle Team A winning a rally
  function handleTeamAScores() {
    if (teamAServing === 1) {
      // A was serving and A won => no rotation, keep serve
      // (Score logic, if needed)
    } else {
      // B was serving and A won => A gains serve => A rotates
      rotateTeamAClockwise();
      setTeamAServing(1);
    }
  }

  // Handle Team B winning a rally
  function handleTeamBScores() {
    if (teamAServing === 1) {
      // A was serving and B won => B gains serve => B rotates
      rotateTeamBClockwise();
      setTeamAServing(0);
    } else {
      // B was serving and B won => no rotation, B keeps serve
      // (Score logic, if needed)
    }
  }

  // Return everything the component needs
  return {
    teamAServing,
    teamAPlayers,
    teamBPlayers,
    handleTeamAScores,
    handleTeamBScores,
  };
}
