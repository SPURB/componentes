const { join } = require('path')
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: [
    join(__dirname, '/components/**/__tests__/**/*.[jt]s?(x)'),
    join(__dirname, '/components/**/?(*.)+(spec|test).[tj]s?(x)'),
    join(__dirname, '/components/**/*.spec.[tj]s?(x)')
  ]
};
