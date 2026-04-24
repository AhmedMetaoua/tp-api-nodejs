import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Config globale (Node.js)
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node
    }
  },

  // Config CommonJS
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  },

  // ✅ AJOUT : config pour les tests Jest
  {
    files: ["**/__tests__/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    }
  }
]);
