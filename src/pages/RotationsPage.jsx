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
      <section className="flex flex-col bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-teal-400">
          Understanding Volleyball Rotations
        </h1>

        <div className="flex flex-1">
          {/* The Court */}
          <div className="flex-1 flex items-start justify-center bg-gray-800 p-4 rounded-lg shadow-md">
            <CourtWithPlayers
              teamAServing={teamAServing}
              teamAPositions={teamAPositions}
              teamAPlayers={teamAPlayers}
              teamBPositions={teamBPositions}
              teamBPlayers={teamBPlayers}
            />
          </div>

          {/* Right Side: Info and Controls */}
          <div className="w-[320px] flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg shadow-lg space-y-6">
            {/* Scoreboard */}
            <div className="w-full">
              <h2 className="text-lg font-bold mb-2 text-center border-b border-gray-700 pb-2">
                Scoreboard
              </h2>
              <div className="flex justify-between items-center">
                <div className="text-xl font-semibold text-blue-400">
                  Team A: <span>{teamAScore}</span>
                </div>
                <div className="text-xl font-semibold text-red-400">
                  Team B: <span>{teamBScore}</span>
                </div>
              </div>
            </div>

            {/* Rally Buttons */}
            <div className="w-full">
              <h2 className="text-lg font-bold mb-2 text-center border-b border-gray-700 pb-2">
                Actions
              </h2>
              <button
                onClick={handleTeamAScores}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded w-full mb-2"
                disabled={matchOver}
              >
                Team A Wins the Rally
              </button>
              <button
                onClick={handleTeamBScores}
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded w-full"
                disabled={matchOver}
              >
                Team B Wins the Rally
              </button>
            </div>

            {/* Serving Info */}
            <div className="w-full">
              <h2 className="text-lg font-bold mb-2 text-center border-b border-gray-700 pb-2">
                Serving Team
              </h2>
              <p
                className={`text-center text-xl font-semibold ${
                  teamAServing === 1 ? 'text-blue-400' : 'text-red-400'
                }`}
              >
                Team {teamAServing === 1 ? 'A' : 'B'}
              </p>
            </div>

            {/* Rotation Counts */}
            <div className="w-full">
              <h2 className="text-lg font-bold mb-2 text-center border-b border-gray-700 pb-2">
                Rotations
              </h2>
              <div className="flex justify-between">
                <p>Team A Rotations:</p>
                <p className="text-blue-400 font-semibold">{teamARotations}</p>
              </div>
              <div className="flex justify-between">
                <p>Team B Rotations:</p>
                <p className="text-red-400 font-semibold">{teamBRotations}</p>
              </div>
            </div>

            {/* Winner Announcement */}
            {matchOver && winner && (
              <div className="bg-teal-600 text-white text-center font-bold py-2 px-4 rounded">
                Team {winner} Won!
              </div>
            )}

            {/* Reset Button */}
            <button
              onClick={resetMatch}
              className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded w-full"
            >
              Reset Match
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
