
// This component is used to render a player marker on the map.

// It is connected to two other components: VolleyballCourt and CourtWithPlayers.

export default function PlayerMarker({ number, x, y }) {
    return (
      <div
        className="
          absolute
          flex items-center justify-center
          w-10 h-10
          rounded-full
          bg-blue-600      /* A simple, solid blue */
          text-white
          font-bold
          text-lg
          border-2 border-white  /* Subtle border for visibility */
          shadow            /* Mild shadow to pop off the background */
        "
        style={{
          top: y,
          left: x,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {number}
      </div>
    );
  }
  
  