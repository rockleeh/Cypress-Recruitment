const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
    reporter: "junit",
     reporterOptions: {
        mochaFile: "cypress/results/results.xml",
        toConsole: true
     },
 
  
  //reporter: 'mochawesome',
  
  projectId: "8pxakf",
  e2e: {
    supportFile: 'support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
