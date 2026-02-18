import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "var(--font-dm-sans), sans-serif",
    },
   
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-dm-sans), sans-serif" },
        body: { value: "var(--font-inter), sans-serif" },
      },
      colors: {
        accent: { value: "#005AE7" },
        bgGray: {
          value: "#F9FAFB"
        }
      },
    },
    semanticTokens: {
      colors: {
        black: { value: "{colors.gray.900}" },
      },
    }
  },
})

export const system = createSystem(defaultConfig, config)
