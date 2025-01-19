import { motion } from 'framer-motion';

export default function PlayerMarker({ number, x, y, teamColor }) {
  return (
    <motion.div
      layout
      className={`absolute flex items-center justify-center 
                 rounded-full text-white font-bold ${teamColor}`}
      style={{
        top: y,
        left: x,
        width: '2.6vw',  // Responsive width based on viewport width
        height: '2.6vw', // Responsive height based on viewport width
        maxWidth: '40px',  // Max size to prevent it from getting too big
        maxHeight: '40px',
        minWidth: '18px',   // Min size to ensure visibility
        minHeight: '18px',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontSize: '1.6vw', 
          minFontSize: '10px', 
          maxFontSize: '16px',
          lineHeight: '1',
          textAlign: 'center',
          width: '100%',
        }}
      >
        {number}
      </span>
    </motion.div>
  );
}
