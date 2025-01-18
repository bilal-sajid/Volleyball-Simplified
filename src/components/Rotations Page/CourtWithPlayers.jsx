import VolleyballCourt from './VolleyballCourt';
import PlayerMarker from './PlayerMarker';

export default function CourtWithPlayers({
  teamAServing,
  teamAPositions,
  teamAPlayers,
  teamBPositions,
  teamBPlayers,
}) {
  // Adjust positions based on serving status
  const updatedTeamAPositions = teamAServing === 1
    ? teamAPositions.map((pos, i) => ({
        ...pos,
        y: i === 0 ? '2%' : pos.y, // Move server behind the line (Team A)
      }))
    : teamAPositions;

  const updatedTeamBPositions = teamAServing === 0
    ? teamBPositions.map((pos, i) => ({
        ...pos,
        y: i === 0 ? '92%' : pos.y, // Move server behind the line (Team B)
      }))
    : teamBPositions;

  // Get the serving player's position
  const servingPlayerPosition =
    teamAServing === 1
      ? updatedTeamAPositions[0] // First player in Team A
      : updatedTeamBPositions[0]; // First player in Team B

  return (
    <div className="relative w-full aspect-[18/9] py-10">
      <VolleyballCourt
        teamAServing={teamAServing}
        servingPlayerPosition={servingPlayerPosition} // Pass serving player's position
      />

      {/* Team A Players - Blue */}
      {teamAPlayers.map((playerNumber, i) => (
        <PlayerMarker
          key={playerNumber}
          number={playerNumber}
          x={updatedTeamAPositions[i].x}
          y={updatedTeamAPositions[i].y}
          teamColor="bg-blue-600"
        />
      ))}

      {/* Team B Players - Red */}
      {teamBPlayers.map((playerNumber, i) => (
        <PlayerMarker
          key={playerNumber}
          number={playerNumber}
          x={updatedTeamBPositions[i].x}
          y={updatedTeamBPositions[i].y}
          teamColor="bg-red-600"
        />
      ))}
    </div>
  );
}
