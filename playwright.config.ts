import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './test',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://127.0.0.1:1234',
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'npm run dev:test',
    url: 'http://localhost:1234',
    reuseExistingServer: !process.env.CI,
  },

  /* projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ], */
})
