import React from 'react';
import useRotationLogic from '../logic/useRotationLogic';
import CourtWithPlayers from '../components/Rotations Page/CourtWithPlayers';
import Navbar from '../components/Navbar';

import Callout from '../components/Callout';

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

  // Positions for players on the court
  const teamAPositions = [
    { x: '20%', y: '18%' },
    { x: '50%', y: '18%' },
    { x: '80%', y: '18%' },
    { x: '80%', y: '41.5%' },
    { x: '50%', y: '41.5%' },
    { x: '20%', y: '41.5%' },
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
      <div className="bg-page-bg min-h-screen text-white">
        <Navbar />
  
        {/* Header Section */}
        <section className="text-center py-10 px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-headerSection-title mb-4 mt-16">
            Rotations & Rally Scoring
          </h1>
          <p className="text-md sm:text-lg text-headerSection-text max-w-3xl mx-auto">
            Learn how volleyball rotations work and understand rally scoring. Practice tracking the serving team and player rotations as the game progresses.
          </p>

        </section>
  
        {/* Main Content */}
        <div className="mx-auto flex flex-col md:flex-row items-center md:items-start px-4 md:px-8 space-y-8 md:space-y-0 md:space-x-8">
          {/* Court Section */}
          <div className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mx-auto">
            <CourtWithPlayers
              teamAServing={teamAServing}
              teamAPositions={teamAPositions}
              teamAPlayers={teamAPlayers}
              teamBPositions={teamBPositions}
              teamBPlayers={teamBPlayers}
            />
          </div>
  
          {/* Right Panel */}
          <div className="w-full sm:w-96 bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 space-y-6">
            {/* Scoreboard */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-100 mb-4">
                Scoreboard
              </h2>
              <div className="flex justify-between items-center text-lg">
                <div className="font-bold">
                  Team A: <span className="text-blue-400">{teamAScore}</span>
                </div>
                <div className="font-bold">
                  Team B: <span className="text-red-400">{teamBScore}</span>
                </div>
              </div>
            </div>
  
            {/* Actions */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-100 mb-4">
                Actions
              </h2>
              <button
                onClick={handleTeamAScores}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mb-4 transition-all duration-200"
                disabled={matchOver}
              >
                Team A Wins the Rally
              </button>
              <button
                onClick={handleTeamBScores}
                className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200"
                disabled={matchOver}
              >
                Team B Wins the Rally
              </button>
            </div>
  
            {/* Serving Team */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-100 mb-4">
                Serving Team
              </h2>
              <p className="text-center text-lg sm:text-xl font-bold">
                {teamAServing === 1 ? (
                  <span className="text-blue-400">Team A</span>
                ) : (
                  <span className="text-red-400">Team B</span>
                )}
              </p>
            </div>
  
            {/* Rotations */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-100 mb-4">
                Rotations
              </h2>
              <div className="flex justify-between">
                <p>Team A Rotations:</p>
                <p className="text-blue-400 font-bold">{teamARotations}</p>
              </div>
              <div className="flex justify-between">
                <p>Team B Rotations:</p>
                <p className="text-red-400 font-bold">{teamBRotations}</p>
              </div>
            </div>
  
            {/* Match Result */}
            {matchOver && winner && (
              <div className="bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-md">
                Team {winner} Won!
              </div>
            )}
  
            {/* Reset Button */}
            <button
              onClick={resetMatch}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200"
            >
              Reset Match
            </button>
          </div>
        </div>

        <section className="px-24 mx-auto py-16">
          <Callout variant="warning" title="Be careful!">
            Overlapping with a teammate before the serve results in a rotation fault.
          </Callout>
        </section>

      </div>
    );
  }
  
