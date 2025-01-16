import React from 'react'
import CourtWithPlayers from '../components/CourtWithPlayers'
// import VolleyballCourt from '../components/VolleyballCourt'

const RotationsPage = () => {

    // Handlers for when each team gets a point

    const handleTeamAGetPoint = () => {
        console.log("Team B should rotate now!");
        // In the future: rotateTeamB() or setState for teamBPlayers, etc.
    };

    const handleTeamBGetPoint = () => {
        console.log("Team A should rotate now!");
        // In the future: rotateTeamA() or setState for teamAPlayers, etc.
    };

return (
    <section>
        <div>This is the page that explains different rotations</div>
        
        <div className="min-h-screen flex flex-col items-center justify-center">
            <CourtWithPlayers />
        </div>

        <div className="space-x-4">
        <button
          onClick={handleTeamAGetPoint}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Team A gets a point
        </button>

        <button
          onClick={handleTeamBGetPoint}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Team B gets a point
        </button>
      </div>

    </section>
)
}

export default RotationsPage