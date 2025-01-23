/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
// import '@testing-library/jest-dom'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Or 'happy-dom'
    globals: true, // Allow global test functions (describe, it, expect)
    setupFiles: ['./vitest.setup.ts'], // Optional setup file for mocks
    include: ['**/*.{test,spec}.{ts,tsx,js,jsx}'], // Test file pattern
    // ... other Vitest options you might want (coverage, reporters, etc.)
  },
})
