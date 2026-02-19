/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // This is the most important line for your structure
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bizonOrange: '#F97316', // The signature orange from bizondigital.com
        bizonDark: '#111827',
      },
    },
  },
  plugins: [],
};