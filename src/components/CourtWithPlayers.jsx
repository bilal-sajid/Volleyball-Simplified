// CourtWithPlayers.js
import VolleyballCourt from './VolleyballCourt';
import PlayerMarker from './PlayerMarker';

export default function CourtWithPlayers({
  teamAPositions, 
  teamAPlayers, 
  teamBPositions, 
  teamBPlayers
}) {
  return (
    <div className="relative w-full aspect-[18/9]">
      <VolleyballCourt />

      {/* Team A */}
      {teamAPlayers.map((playerNumber, i) => (
        <PlayerMarker
          key={playerNumber}
          number={playerNumber}
          x={teamAPositions[i].x}
          y={teamAPositions[i].y}
        />
      ))}

      {/* Team B */}
      {teamBPlayers.map((playerNumber, i) => (
        <PlayerMarker
          key={playerNumber}
          number={playerNumber}
          x={teamBPositions[i].x}
          y={teamBPositions[i].y}
        />
      ))}
    </div>
  );
}
