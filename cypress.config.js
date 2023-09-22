const { defineConfig } = require("cypress"); 
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
    specPattern: 'cypress/integration/examples/*.js',
    specPattern: 'cypress/integration/rubicscube/*.js'  
  }, 
});