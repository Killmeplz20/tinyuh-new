import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],

  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
    },
    colors: {
      main: "#DBC7A1",
    },
  },
};
export default config;
