import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-dm-sans)" },
        body: { value: "var(--font-inter)" },
      },
      colors: {
        accent: { value: "#005AE7" },
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
