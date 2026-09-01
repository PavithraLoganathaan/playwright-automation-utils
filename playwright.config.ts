import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  timeout: 30_000,
  use: { headless: true }
});
