import { useEffect, useState } from 'react';
import VolleyballCourt from './VolleyballCourt';
import PlayerMarker from './PlayerMarker';

export default function CourtWithPlayers({
  teamAServing,
  teamAPositions,
  teamAPlayers,
  teamBPositions,
  teamBPlayers,
}) {
  const [screenSize, setScreenSize] = useState('large');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('small');  // Mobile
      } else if (width < 1024) {
        setScreenSize('medium'); // Tablet
      } else {
        setScreenSize('large');  // Desktop
      }
    };

    // Initial check
    updateScreenSize();

    // Event listener for resizing window
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Responsive Y-positions for Team A
  const getResponsiveTeamAY = (index) => {
    if (teamAServing === 1 && index === 0) {
      switch (screenSize) {
        case 'small':
          return '6%';
        case 'medium':
          return '3%';
        default:
          return '2%'; // Default for large screens
      }
    }
    return teamAPositions[index].y;
  };

  // Responsive Y-positions for Team B
  const getResponsiveTeamBY = (index) => {
    if (teamAServing === 0 && index === 0) {
      switch (screenSize) {
        case 'small':
          return '89%';
        case 'medium':
          return '92%';
        default:
          return '95%'; // Default for large screens
      }
    }
    return teamBPositions[index].y;
  };

  return (
    <div className="relative w-full aspect-[16/10] py-10">
      <VolleyballCourt
        teamAServing={teamAServing}
        servingPlayerPosition={
          teamAServing === 1
            ? { x: teamAPositions[0].x, y: getResponsiveTeamAY(0) }
            : { x: teamBPositions[0].x, y: getResponsiveTeamBY(0) }
        }
      />

      {/* Team A Players - Blue */}
      {teamAPlayers.map((playerNumber, i) => (
        <PlayerMarker
          key={playerNumber}
          number={playerNumber}
          x={teamAPositions[i].x}
          y={getResponsiveTeamAY(i)}
          teamColor="bg-blue-600"
        />
      ))}

      {/* Team B Players - Red */}
      {teamBPlayers.map((playerNumber, i) => (
        <PlayerMarker
          key={playerNumber}
          number={playerNumber}
          x={teamBPositions[i].x}
          y={getResponsiveTeamBY(i)}
          teamColor="bg-red-600"
        />
      ))}
    </div>
  );
}
