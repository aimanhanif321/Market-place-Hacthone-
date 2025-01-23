import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  letterSpacing:{
			'3pct' : '3%'
		  },
		  fontFamily:{
			poppins:['Poppins' , 'sans-serif'],
			Inter:['Poppins' , 'sans-serif'],
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;