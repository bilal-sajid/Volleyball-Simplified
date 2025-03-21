/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        infoCard: {
          bg: '#1F2937',         // Default bg color (gray-800 equivalent)
          hoverBg: '#374151',    // Hover bg color (gray-700 equivalent)
          title: '#FB923C',      // Orange title color
          text: '#D1D5DB',       // Light gray text
        },
        infoSection: {
          title: '#FFFFFF',      // Section title color (white or any color you want)
        },
        highlightSection: {
          bg: '#1F2937',          // Same as gray-800
          border: '#F97316',      // Orange-500 border color
          text: '#D1D5DB',        // Light gray text
        },
        
      }
    },
  },
  plugins: [],
}

