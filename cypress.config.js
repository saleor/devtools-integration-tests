const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rurtzd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
