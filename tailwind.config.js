// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14A061", // Deep green from the logo
        secondary: "#0BA6C7", // Blue element from the logo
        accent: "#C2E6D6", // Light mint green for accents
        background: "#FFFFFF", // Clean white base
        textPrimary: "#000000", // Black for text clarity
        textSecondary: "#0BA6C7", // Blue for secondary text
        softNeutral: "#F5F5F5", // Light neutral background
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#14A061", // Deep green for primary actions
          secondary: "#0BA6C7", // Blue for highlights
          accent: "#C2E6D6", // Light mint green accents
          neutral: "#F5F5F5", // Neutral tones for balance
          "base-100": "#FFFFFF", // Clean white background
          info: "#0BA6C7", // Same blue for information messages
          success: "#14A061", // Deep green for success
          warning: "#FFD700", // Gold for warnings
          error: "#CD5C5C", // Indian red for errors
        },
      },
    ],
  },
};
