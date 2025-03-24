/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: {
          DEFAULT: '#ffffff',
          text: '#000000',
          hover: '#d1d5db', 
        },
        secondary: {
          DEFAULT: '#000000',
          text: '#000000',
          border: '#000000',
          hover: '#00000020',
        },

        navbar: {
          bg: '#3F3F3F',      
          text: '#F8F5F0',    
          hover: '#D6CFC7',   
        },

        page: {
          bg: '#D8CAB8',
        },

        callout: {
          info: {
            bg: '#f9f7f4',
            border: '#c8b6a6',
            text: '#3b3b3b',
            icon: '#a08b6e',
          },
          success: {
            bg: '#f4f9f7',
            border: '#a8c6b6',
            text: '#2f4f4f',
            icon: '#4caf50',
          },
          warning: {
            bg: '#fdf7f3',
            border: '#e0b980',
            text: '#5b3e1d',
            icon: '#f4a261',
          },
          tip: {
            bg: '#f8f8f3',
            border: '#c4c99c',
            text: '#3b3b3b',
            icon: '#9ca86e',
          },
        },

        headerSection: {
          title: '#2F2F2F',
          text: '#4B5563',
        },

        infoCard: {
          bg: '#F8F5F0',        
          border: '#D6CFC7',    
          title: '#3F3F3F',    
          text: '#4B5563',  
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
          primary: '#4B6A84', 
          hover: '#3A506B',
        },
      }
    }
  },
  plugins: [],
}

