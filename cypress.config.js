const { defineConfig,  } = require("cypress");
const {execSync} = require('child_process')
var rimraf = require("rimraf");


module.exports = defineConfig({
  projectId: "rurtzd",
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        deleteFolder(folderName) {
          console.log("deleting folder %s", folderName);

          return new Promise((resolve, reject) => {

            rimraf(folderName, { maxRetries: 10, recursive: true }, (err) => {
              if (err) {
                console.error(err);
                return reject(err);
              }
              resolve(null);
            });
          });
        },
      });
    },
  },
});
