/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "600px",
        lg: "900px",
      },
      colors: {
        white: "#FFFFFF",
        "indigo-700": "#4338CA",
        "neutral-900": "#171717",
        "neutral-600": "#525252",
        "gray-light": "#F9FAFB",
        "gray-medium": "#D2D6DB",
        "green-700": "#15803D",
        "green-200": "#BBF7D0",
        "green-50": "#F0FDF4",
        transparent: "transparent", // Add transparent color
      },
      fontSize: {
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
      },
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
        button: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
