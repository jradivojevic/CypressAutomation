const { defineConfig } = require("cypress");

module.exports = defineConfig({
    
"reporter": "cypress-multi-reporters",
"reporterOptions": {
"reporterEnabled": "mochawesome",
"mochawesomeReporterOptions": {
"reportDir": "cypress/reports/mocha",
"quite": true,
"overwrite": false,
"html": false,
"json": true

}

},


e2e: {
// baseUrl: 'http://localhost:4200',
specPattern: "**/*.feature",

// prefix async
async setupNodeEvents(on, config) {
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

// await here
await require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config)

on('file:preprocessor', createBundler({
plugins: [createEsbuildPlugin(config)],
}));

// return any mods to Cypress
return config
},
"chromeWebSecurity": false,
"baseUrl": 'http://uitestingplayground.com/',
"viewportWidth": 1280,
"viewportHeight": 1000,
"video": false,
"screenshotOnRunFailure": true,
"trashAssetsBeforeRuns": true,
"responseTimeout": 120000,

},
});