import { defineConfig } from "cypress";
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
    projectId: "fgna7d",
    video: false,
    viewportWidth: 1360,
    viewportHeight: 1080,
    e2e: {
        baseUrl: "http://localhost:3000/",
        specPattern: "cypress/integration/**/*.cy.ts",
        setupNodeEvents(on) {
            on('file:preprocessor', vitePreprocessor())
        },
    },
});