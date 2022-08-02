/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layout/**/*.{js,ts,,jsx,tsx}",
  ],
  theme: {
    colors: {
			blue: "#033E50",
			grey: "#3E4A4A",
			yellow: "#F69534",
			orange: "#FE6722",
			sea: "#3E8678",
			green: "#147167",
			cream: "#E4B599",
			white: "#ffffff",
			trans: "#ffffff00",
			black: "#000000",
			"logo-nav-1": "#F2682B",
			"logo-nav-2": "#F79732",
		},
		fontFamily: {
			poppins: ["poppins", "sans-serif"],
			agrandir: ["agrandir", "sans-serif"],
			droid: ["droid", "serif"],
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
    extend: {},
  },
  plugins: [],
}
