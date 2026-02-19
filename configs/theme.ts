import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      fontFamily: "var(--font-inter), sans-serif",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "var(--font-dm-sans), sans-serif",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-dm-sans), sans-serif" },
        body: { value: "var(--font-inter), sans-serif" },
        inter: { value: "var(--font-inter), sans-serif" },
        dmSans: { value: "var(--font-dm-sans), sans-serif" },
      },
      colors: {
        accent: { value: "#005AE7" },
        bgGray: { value: "#F9FAFB" },
        gray: {
          50: { value: "#F9FAFB" },
          100: { value: "#F7F7F7" },
          200: { value: "#E5E5E5" },
          400: { value: "#9CA3AF" },
          500: { value: "#6B7280" },
          // 600: { value: "#A9A9A9" },
          600: { value: "#4B5563" },
          700: { value: "#374151" },
          800: { value: "#666666" },
          900: { value: "#111827" },
          950: { value: "#030712" },
        },
        yellow: {
          50: { value: "#FEFCE8" },
          100: { value: "#F7F7F7" },
          200: { value: "#E5E5E5" },
          400: { value: "#9CA3AF" },
          500: { value: "#6B7280" },
          600: { value: "#CA8A04" },
          700: { value: "#374151" },
          800: { value: "#666666" },
          900: { value: "#111827" },
          950: { value: "#030712" },
        }
      },
      borders: {
        gray: {
          100: { value: "1px solid #F3F4F6" },
          200: { value: "1px solid #E5E5E5" },
        },
        "100": { value: "1px solid #F3F4F6" },
      },
    },
    semanticTokens: {
      colors: {
        black: { value: "#1A1A1A" }, // Better to use actual color instead of reference
        fg: {
          subtle: { value: "{colors.gray.500}" },
          muted: { value: "{colors.gray.900}" },
        }
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)