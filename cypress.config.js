const { defineConfig,  } = require("cypress");
const { rmdir } = require("fs");

module.exports = defineConfig({
  projectId: "rurtzd",
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        deleteFolder(folderName) {
          console.log("deleting folder %s", folderName);

          return new Promise((resolve, reject) => {
            rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
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
