/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5E6D3", // Soft eggshell beige
        secondary: "#4A4238", // Rich, deep brown reminiscent of natural soap
        accent: "#E6D2B5", // Warm, creamy eggshell tone
        background: "#FFFFFF", // Pure white for clean feel
        softNeutral: "#F9F5F0", // Delicate off-white with warm undertones
        naturalBrown: "#8B4513", // Earthy soap-like brown
        creamyEggshell: "#F3E5AB", // Soft, warm eggshell color
        pureWhite: "#FFFFFF", // Pristine white for purity
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F5E6D3", // Soft eggshell beige
          secondary: "#4A4238", // Deep brown
          accent: "#E6D2B5", // Creamy accent
          neutral: "#F9F5F0", // Soft neutral tone
          "base-100": "#FFFFFF", // Pure white background
          "base-200": "#F9F5F0", // Slightly warmer background
          info: "#87CEEB", // Soft sky blue for information
          success: "#2E8B57", // Sea green for success
          warning: "#DEB887", // Burlywood for warnings
          error: "#CD5C5C", // Indian red for errors
        },
      },
    ],
  },
};