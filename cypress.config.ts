import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const mongoose = require('mongoose')

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on("task", {
        async 'clearDB'(){
          await mongoose.connect("mongodb://localhost:27017/todoList")
          const database = mongoose.connection.db;

          const findCollection = await database.listCollections().toArray();
  
          findCollection.map(col => col.name).forEach(async colName => await database.dropCollection(colName))

          return null
        }
      })

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://localhost:3000",
  },
});
