import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: !process.env.CI
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	projects: [
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
	  ],
	  reporter: [
		['html', {outputFolder: 'playwright-report'}]
	  ]
};

export default config;
