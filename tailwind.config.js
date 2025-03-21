/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: {
          bg: '#D8CAB8',
        },
        headerSection: {
          title: '#2F2F2F',
          text: '#4B5563',
        },
        infoCard: {
          bg: '#F8F5F0',        // Light cream for cards
          border: '#D6CFC7',    // Beige border
          title: '#3F3F3F',     // Slate blue headings
          text: '#4B5563',      // Dark text
        },
        infoSection: {
          title: '#3F3F3F',
        },
        highlightSection: {
          bg: '#E4DCCF',      
          text: '#2F2F2F',
          border: '#A3987C',
        },
        button: {
          primary: '#4B6A84',   // Slate blue
          hover: '#3A506B',     // Slightly darker hover
          text: '#FFFFFF',
        },
      }
    }
  },
  plugins: [],
}

