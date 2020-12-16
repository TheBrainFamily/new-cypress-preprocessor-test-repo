const {preprocessor} = require("@badeball/cypress-cucumber-preprocessor"); // eslint-disable-line

module.exports = (on) => {
  on("file:preprocessor", preprocessor());
};
