const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  numTestsKeptInMemory: 10,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://way2automation.com/way2auto_jquery'
    //baseUrl: 'https://jsonplaceholder.typicode.com'
  },
});
