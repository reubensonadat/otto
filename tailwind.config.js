/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cw: {
          yellow: "#FFC907",
          "yellow-hover": "#EBB400",
          "yellow-light": "#FFF9E5",
          black: "#111111",
          dark: "#1A1A1A",
          charcoal: "#2A2A2A",
          blue: "#299EC4",
          "blue-light": "#EBF7FC",
          cream: "#FAF8F5",
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            500: "#6B7280",
            700: "#374151",
            900: "#111827",
          }
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        heading: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        'cw': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'cw-card': '0 8px 30px rgba(0,0,0,0.08)',
        'cw-yellow': '0 8px 24px rgba(255, 201, 7, 0.35)',
      }
    },
  },
  plugins: [],
}
