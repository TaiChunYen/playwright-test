import { defineConfig } from '@playwright/test';
export default defineConfig({
    globalSetup: './tests/login.setup.ts',
    use: {
      storageState: 'storageState.json',
      locale: 'zh-TW',
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