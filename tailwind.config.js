/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#FFBC41",
        secondary: "#000B2C",
        tertiary: "#FFBC41",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),

            h1: {
              color: theme("colors.secondary"),
              fontWeight: "700",
              marginTop: "1.6em",
              marginBottom: "0.6em",
            },
            h2: {
              color: theme("colors.secondary"),
              fontWeight: "700",
              marginTop: "1.6em",
              marginBottom: "0.6em",
            },
            h3: {
              color: theme("colors.secondary"),
              fontWeight: "600",
              marginTop: "1.4em",
              marginBottom: "0.5em",
            },

            p: {
              marginTop: "1rem",
              marginBottom: "1rem",
              lineHeight: "1.85",
            },

            ul: {
              paddingLeft: "1.25rem",
            },
            ol: {
              paddingLeft: "1.25rem",
            },

            li: {
              marginTop: "0.4rem",
              marginBottom: "0.4rem",
            },

            strong: {
              color: theme("colors.secondary"),
              fontWeight: "700",
            },

            a: {
              color: theme("colors.primary"),
              fontWeight: "600",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },

            blockquote: {
              borderLeftColor: theme("colors.primary"),
              color: theme("colors.gray.600"),
              fontStyle: "italic",
            },
          },
        },
      }),
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};
