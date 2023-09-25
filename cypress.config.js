const { defineConfig } = require("cypress"); 
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({ 

  defaultCommandTimeout: 5000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'C:/Users/prem.rathore/OneDrive - Dev Information Technology Limited/Shared Drive',
    charts: true,
    reportPageTitle: 'custom-title',
    reportFilename: "[status]_[datetime]-[name]-report",
    timestamp: "default",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false  ,
    overwrite: true,
  },

  env:{
    url : 'https://rahulshettyacademy.com',
    expectedText: "qaclickacademy"
    
  },
  retries: {
    openMode: 0
    
    },
  projectId: "zrh84w",

  
  e2e: { 
    setupNodeEvents(on, config) { 
      require('cypress-mochawesome-reporter/plugin')(on);
    }, 
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js',
    specPattern: 'cypress/integration/rubicscube/*.js',
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  }, 
});