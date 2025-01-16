import VolleyballCourt from './VolleyballCourt';
import PlayerMarker from './PlayerMarker';

export default function CourtWithPlayers() {
  // Team A (top side) - example coordinates for an approximate formation:
  // These are just one possible layout. Adjust % as you see fit.
  const teamAPlayers = [
    { number: 1, x: '20%', y: '42%' }, 
    { number: 2, x: '50%', y: '42%' }, 
    { number: 3, x: '80%', y: '42%' }, 
    { number: 4, x: '20%', y: '20%' }, 
    { number: 5, x: '50%', y: '20%' }, 
    { number: 6, x: '80%', y: '20%' }, 
  ];

  // Team B (bottom side) - mirrored approximate positions
  const teamBPlayers = [
    { number: 7,  x: '20%', y: '58%' }, 
    { number: 8,  x: '50%', y: '58%' }, 
    { number: 9,  x: '80%', y: '58%' }, 
    { number: 10, x: '20%', y: '80%' }, 
    { number: 11, x: '50%', y: '80%' },
    { number: 12, x: '80%', y: '80%' },
  ];

  return (
    <div className="relative w-full max-w-4xl aspect-[18/9]">
      {/* The Court */}
      <VolleyballCourt />

      {/* Team A Markers */}
      {teamAPlayers.map((player) => (
        <PlayerMarker
          key={player.number}
          number={player.number}
          x={player.x}
          y={player.y}
        />
      ))}

      {/* Team B Markers */}
      {teamBPlayers.map((player) => (
        <PlayerMarker
          key={player.number}
          number={player.number}
          x={player.x}
          y={player.y}
        />
      ))}
    </div>
  );
}
