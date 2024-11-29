/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
<<<<<<< HEAD
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "var(--color-blue)",
        yellow: "var(--color-yellow)",
        gold: "var(--color-gold)",
        orange: "var(--color-orange)",
      },
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
      },
    },
=======
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
>>>>>>> d21be07ebf79133e92be10fd060a7e0bbe53bc11
  },
  plugins: [],
};
