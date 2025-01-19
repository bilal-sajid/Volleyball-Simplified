import { useState } from 'react';

export default function useRotationLogic() {
  // Custom names for players
  const initialTeamAPlayers = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6'];
  const initialTeamBPlayers = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6'];

  // Serving: 1 => Team A, 0 => Team B
  const [teamAServing, setTeamAServing] = useState(1);

  // Arrays for each team’s players
  const [teamAPlayers, setTeamAPlayers] = useState(initialTeamAPlayers);
  const [teamBPlayers, setTeamBPlayers] = useState(initialTeamBPlayers);

  // Scoreboard
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  // Rotation count
  const [teamARotations, setTeamARotations] = useState(0);
  const [teamBRotations, setTeamBRotations] = useState(0);

  // Match End
  const [matchOver, setMatchOver] = useState(false);
  const [winner, setWinner] = useState(null); // 'A' or 'B' or null if ongoing

  // Rotate Team A (last -> front)
  function rotateTeamAClockwise() {
    setTeamAPlayers(prev => {
      const arr = [...prev];
      const last = arr.pop();
      arr.unshift(last);
      return arr;
    });
    setTeamARotations(prev => prev + 1); // increment rotation count
  }

  // Rotate Team B (last -> front)
  function rotateTeamBClockwise() {
    setTeamBPlayers(prev => {
      const arr = [...prev];
      const last = arr.pop();
      arr.unshift(last);
      return arr;
    });
    setTeamBRotations(prev => prev + 1); // increment rotation count
  }

  // Check if someone reached 25
  function checkForWinner() {
    if (teamAScore >= 25) {
      setMatchOver(true);
      setWinner('A');
    } else if (teamBScore >= 25) {
      setMatchOver(true);
      setWinner('B');
    }
  }

  function handleTeamAScores() {
    if (matchOver) return; // No more scoring if match is over
  
    let newScore = teamAScore + 1;
  
    if (teamAServing === 1) {
      // A was serving & won => no rotation, just increment A's score
      setTeamAScore(newScore);
    } else {
      // B was serving & A won => A gains serve => A rotates
      setTeamAScore(newScore);
      rotateTeamAClockwise();
      setTeamAServing(1);
    }
  
    // Check for winner or deuce
    checkForWinnerOrDeuce(newScore, teamBScore, 'A');
  }
  
  function handleTeamBScores() {
    if (matchOver) return; // No more scoring if match is over
  
    let newScore = teamBScore + 1;
  
    if (teamAServing === 1) {
      // A was serving & B won => B gains serve => B rotates
      setTeamBScore(newScore);
      rotateTeamBClockwise();
      setTeamAServing(0);
    } else {
      // B was serving & B won => no rotation, just increment B's score
      setTeamBScore(newScore);
    }
  
    // Check for winner or deuce
    checkForWinnerOrDeuce(newScore, teamAScore, 'B');
  }
  
  function checkForWinnerOrDeuce(currentScore, opponentScore, team) {
    // Normal winning condition (before deuce)
    if (currentScore >= 25 && currentScore >= opponentScore + 2) {
      setMatchOver(true);
      setWinner(team);
      return;
    }
  
    // Deuce condition: Both scores >= 24
    if (currentScore >= 24 && opponentScore >= 24) {
      if (currentScore >= opponentScore + 2) {
        setMatchOver(true);
        setWinner(team);
      }
    }
  }
  
  

  // Reset the match entirely
  function resetMatch() {
    setTeamAServing(1); // or 0, if you want Team B to start next
    setTeamAPlayers(initialTeamAPlayers);
    setTeamBPlayers(initialTeamBPlayers);
    setTeamAScore(0);
    setTeamBScore(0);
    setTeamARotations(0);
    setTeamBRotations(0);
    setMatchOver(false);
    setWinner(null);
  }

  return {
    // States
    teamAServing,
    teamAPlayers,
    teamBPlayers,
    teamAScore,
    teamBScore,
    teamARotations,
    teamBRotations,
    matchOver,
    winner,

    // Handlers
    handleTeamAScores,
    handleTeamBScores,
    resetMatch,
  };
}
