import { motion } from 'framer-motion';

export default function PlayerMarker({ number, x, y, teamColor }) {
  return (
    <motion.div
      layout
      className={`absolute flex items-center justify-center 
                 w-10 h-10 rounded-full text-white font-bold ${teamColor}`}
      style={{
        top: y,
        left: x,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {number}
    </motion.div>
  );
}
