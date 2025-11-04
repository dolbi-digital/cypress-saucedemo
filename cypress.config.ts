import { defineConfig } from 'cypress'
// Allure writer
// eslint-disable-next-line @typescript-eslint/no-var-requires
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1366,
    viewportHeight: 850,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    }
  },
  env: {
    allure: true,
    allureResultsPath: 'allure-results',
    //allureCleanResults: true
  }
})
