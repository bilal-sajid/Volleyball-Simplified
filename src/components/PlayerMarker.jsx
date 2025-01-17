// PlayerMarker.js
import { motion } from 'framer-motion';

export default function PlayerMarker({ number, x, y }) {
  return (
    <motion.div
      layout  // <--- This helps animate layout changes
      className="absolute flex items-center justify-center 
                 w-10 h-10 rounded-full bg-blue-600 text-white font-bold"
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
