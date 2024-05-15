/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "600px",
      lg: "900px",
    },
    colors: {
      white: "#FFFFFF",
      "indigo-700": "#4338CA",
      "nuetral-dark": "#171717",
      nuetral: "#525252",
      "gray-light": "#F9FAFB",
      "gray-medium": "#D2D6DB",
      "green-dark": "#15803D",
      green: "#BBF7DO",
      "green-light": "#F0FDF4",
    },
    fontSize: {
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
    },
    extend: {
      spacing: {
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
      },
      borderRadius: {
        md: "0.375rem",
        lg: "0.5rem",
      },
      boxShadow: {
        button: "0 2px 4px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
