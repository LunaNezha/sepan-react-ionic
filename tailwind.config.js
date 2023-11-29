/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      xs: "512px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
        950: "#431407",
      },
      amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
        950: "#451a03",
      },
      rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
        950: "#4c0519",
      },
      violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
        950: "#2e1065",
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
        950: "#022c22",
      },
      blue: {
        50: "#eef6ff",
        100: "#d8eaff",
        200: "#bad9ff",
        300: "#8bc4ff",
        400: "#55a2ff",
        500: "#2d7dff",
        600: "#2666fa",
        700: "#0f45e6",
        800: "#1338ba",
        900: "#163592",
        950: "#122259",
      },
      ebony: {
        50: "#f0f7fe",
        100: "#deecfb",
        200: "#c4e0f9",
        300: "#9cccf4",
        400: "#6dafed",
        500: "#4b90e6",
        600: "#3674da",
        700: "#2d60c8",
        800: "#2a4fa3",
        900: "#274481",
        950: "#0f172a",
      },
      "big-stone": {
        50: "#f1f7fd",
        100: "#e0edf9",
        200: "#c8dff5",
        300: "#a2cbee",
        400: "#76aee4",
        500: "#5692db",
        600: "#4277ce",
        700: "#3864bd",
        800: "#33529a",
        900: "#2e477a",
        950: "#19233b",
      },
      white: {
        50: "#ffffff",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },
    },
    extend: {
      fontFamily: {
        "iranyekan-bold": ["iranyekan-bold", "sans-serif"],
        "iranyekan-thin": ["iranyekan-thin", "sans-serif"],
        "iranyekan-light": ["iranyekan-light", "sans-serif"],
        "iranyekan-regular": ["iranyekan-regular", "sans-serif"],
        "iranyekan-medium": ["iranyekan-medium", "sans-serif"],
        "iranyekan-extrabold": ["iranyekan-extrabold", "sans-serif"],
        "iranyekan-black": ["iranyekan-black", "sans-serif"],
        "iranyekan-extrablack": ["iranyekan-extrablack", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 4px 20px rgba(0, 0, 0, 10%)",
        "tabbar-dark": "0px -8px 20px rgba(0, 0, 0, 15%)",
        "tabbar-light": "0px -8px 20px rgba(0, 0, 0, 10%)",
      },
      maxWidth: {
        auto: "auto",
        14: "3.5rem",
        992: "992px",
      },
      minWidth: {
        auto: "auto",
        14: "3.5rem",
      },
      flex: {
        100: "1 1 100%",
      },
      height: {
        1.25: "5px",
        18: "4.5rem",
      },
      backgroundImage: {
        "triangle-shape": "url('./src/assets/images/triangle-shape.png')",
      },
    },
    minHeight: {
      auto: "auto",
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("partNative", "&::part(native)");
      addVariant("partArrow", "&::part(arrow)");
      addVariant("partBackground", "&::part(background)");
      addVariant("partText", "&::part(text)");
      addVariant("partContent", "&::part(content)");
      addVariant("partProgress", "&::part(progress)");
      addVariant("partStream", "&::part(stream)");
      addVariant("partTrack", "&::part(track)");
      addVariant("partContainer", "&::part(container)");
      addVariant("partScroll", "&::part(scroll)");
      addVariant("partSeparator", "&::part(separator)");
      addVariant("partIcon", "&::part(icon)");
      addVariant("partPlaceholder", "&::part(placeholder)");
      addVariant("partMark", "&::part(mark)");
      addVariant("partCollapsedIndicator", "&::part(collapsed-indicator)");
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
          width: 0,
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          overflow: "-moz-scrollbars-none",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
