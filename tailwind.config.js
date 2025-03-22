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
        navbar: {
          bg: '#3F3F3F',      
          text: '#F8F5F0',    
          hover: '#D6CFC7',   
          active: '#4B6A84',  
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

