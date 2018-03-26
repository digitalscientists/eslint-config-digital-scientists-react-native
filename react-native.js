"use strict";

// Specifies additional options to use in React-Native projects.
// Note that you need to manually install `eslint-plugin-react-native` as a peer
// dependency (see https://goo.gl/I4AYlb for more details).

module.exports = {
  env: {
    "react-native/react-native": true
  },

  extends: ["plugin:react-native/all"],

  plugins: ["react-native"],

  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    alert: 0,
    "react-native/no-unused-styles": 1,
    "react-native/split-platform-components": 0,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 1
  }
};
