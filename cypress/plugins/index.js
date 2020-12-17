const preprocessor = require("@badeball/cypress-cucumber-preprocessor").default; // eslint-disable-line

module.exports = (on) => {
  on("file:preprocessor", preprocessor());
};
