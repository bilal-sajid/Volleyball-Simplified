import React from 'react';
import useRotationLogic from '../logic/useRotationLogic';
import CourtWithPlayers from '../components/Rotations Page/CourtWithPlayers';
import Navbar from '../components/Navbar';

export default function RotationsPage() {
  const {
    teamAServing,
    teamAPlayers,
    teamBPlayers,
    teamAScore,
    teamBScore,
    teamARotations,
    teamBRotations,
    matchOver,
    winner,
    handleTeamAScores,
    handleTeamBScores,
    resetMatch,
  } = useRotationLogic();

  // Positions
  const teamAPositions = [
    { x: '20%', y: '15%' },
    { x: '50%', y: '15%' },
    { x: '80%', y: '15%' },
    { x: '80%', y: '42%' },
    { x: '50%', y: '42%' },
    { x: '20%', y: '42%' },
  ];

  const teamBPositions = [
    { x: '80%', y: '80%' },
    { x: '50%', y: '80%' },
    { x: '20%', y: '80%' },
    { x: '20%', y: '56%' },
    { x: '50%', y: '56%' },
    { x: '80%', y: '56%' },
  ];

  return (
    <div>
        <Navbar />
        <section className="flex flex-col">
        <h1 className="text-2xl font-bold p-4 self-center">
            Rally Scoring + Scoreboard + Rotation Count + Up to 25
        </h1>

        <div className="flex flex-1">
            {/* The Court */}
            <div className="flex-1 flex items-start justify-start bg-gray-800 p-2 py-4">
            <CourtWithPlayers
                teamAServing={teamAServing}
                teamAPositions={teamAPositions}
                teamAPlayers={teamAPlayers}
                teamBPositions={teamBPositions}
                teamBPlayers={teamBPlayers}
            />
            </div>

            {/* Right side: Scoreboard & Controls */}
            <div className="w-[250px] flex flex-col items-start bg-gray-200 p-4 space-y-4">
            {/* Scoreboard */}
            <div className="w-full flex justify-between items-center font-bold">
                <div>Team A: {teamAScore}</div>
                <div>Team B: {teamBScore}</div>
            </div>

            {/* Rally Buttons */}
            <button
                onClick={handleTeamAScores}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                disabled={matchOver} // disable if match is over
            >
                Team A wins the rally
            </button>
            <button
                onClick={handleTeamBScores}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
                disabled={matchOver} // disable if match is over
            >
                Team B wins the rally
            </button>

            {/* Serving Info */}
            <h2 className="text-lg font-semibold">
                Serving: Team {teamAServing === 1 ? 'A' : 'B'}
            </h2>

            {/* Rotation Counts */}
            <div>
                <p>Team A Rotations: {teamARotations}</p>
                <p>Team B Rotations: {teamBRotations}</p>
            </div>

            {/* Winner & Reset */}
            {matchOver && winner && (
                <div className="bg-green-100 p-2 rounded font-bold w-full text-center">
                Team {winner} Won!
                </div>
            )}

            <button
                onClick={resetMatch}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full"
            >
                Reset Match
            </button>
            </div>
        </div>
        </section>


    </div>
  );
}
