import { defineConfig } from '@playwright/test';
export default defineConfig({
    use: {
      storageState: 'storageState.json',
    },
    projects: [
      {
        name: 'setup',
        testMatch: /.*\.setup\.ts/,
      },
      {
        name: 'tests',
        testMatch: /.*\.spec\.ts/,
        dependencies: ['setup'],
      }
    ]
  });