const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880, 
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
})
