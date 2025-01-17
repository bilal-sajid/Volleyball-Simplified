// pages/RotationsPage.js (or wherever your route/page is)

import React from 'react';
import useRotationLogic from '../logic/useRotationLogic';
import CourtWithPlayers from '../components/CourtWithPlayers';

export default function RotationsPage() {
  // 1. Use the custom hook for logic
  const {
    teamAServing,
    teamAPlayers,
    teamBPlayers,
    handleTeamAScores,
    handleTeamBScores,
  } = useRotationLogic();

  // 2. Define the positions (or import them from another file)
  const teamAPositions = [
    { x: '20%', y: '15%' },
    { x: '50%', y: '15%' },
    { x: '80%', y: '15%' },
    { x: '80%', y: '38%' },
    { x: '50%', y: '38%' },
    { x: '20%', y: '38%' },
  ];

  const teamBPositions = [
    { x: '80%', y: '85%' },
    { x: '50%', y: '85%' },
    { x: '20%', y: '85%' },
    { x: '20%', y: '57%' },
    { x: '50%', y: '57%' },
    { x: '80%', y: '57%' },
  ];

  // 3. Render the UI
  return (
    <section className="flex flex-col">
      <h1 className="text-2xl font-bold p-4 self-center">
        Standard Rally Scoring Example
      </h1>

      <div className="flex flex-1">
        {/* Left side: The Court */}
        <div className="flex-1 flex items-start justify-start bg-gray-100 p-2">
          <CourtWithPlayers
            teamAPositions={teamAPositions}
            teamAPlayers={teamAPlayers}
            teamBPositions={teamBPositions}
            teamBPlayers={teamBPlayers}
          />
        </div>

        {/* Right side: Buttons & Serving Info */}
        <div className="w-[250px] flex flex-col items-start justify-start bg-gray-200 p-4 space-y-4">

          <button
            onClick={handleTeamAScores}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Team A wins the rally
          </button>

          <button
            onClick={handleTeamBScores}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
          >
            Team B wins the rally
          </button>

          <h2 className="text-lg font-semibold mt-2">
            Serving: Team {teamAServing === 1 ? 'A' : 'B'}
          </h2>
        </div>
      </div>
    </section>
  );
}
