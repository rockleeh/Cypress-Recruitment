const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
    reporter: "junit",
     reporterOptions: {
        mochaFile: "cypress/results/results.xml",
        toConsole: true
     },
 
  
  //reporter: 'mochawesome',
  
  projectId: "4o1zbk",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
