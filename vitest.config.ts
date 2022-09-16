import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    testTimeout: 120_000,
    hookTimeout: 120_000,
    watch: false
  },
})