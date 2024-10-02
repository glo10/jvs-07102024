import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['html'],
      reportsDirectory: './0-exercices/tests/coverage'
    },
    environmentMatchGlobs: [
      [
        'tests/0-exercices/1-ex/correction/src/index.spec.js'
      ]
    ],
    exclude: ['node_modules', 'admin', '0-exercices', 'cypress', 'demo', 'old', 'tests/notOrdered']
  },
  resolve: {
    alias: {
      '@tex': fileURLToPath(new URL('./tests/0-exercices', import.meta.url)),
      '@': fileURLToPath(new URL('./0-exercices', import.meta.url))
    }
  }
})
