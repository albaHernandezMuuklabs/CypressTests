import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.saucedemo.com',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  reporter: [
    ['@muuktest/amikoo-reporter'], // Required for Amikoo QA
    ['list'],
  ],
});
