const { join } = require('path')
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: [
    join(__dirname, '/src/**/__tests__/**/*.[jt]s?(x)'),
    join(__dirname, '/src/**/?(*.)+(spec|test).[tj]s?(x)'),
    join(__dirname, '/src/**/*.spec.[tj]s?(x)')
  ]
};
