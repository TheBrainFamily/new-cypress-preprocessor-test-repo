import { Given, Then, When, And, But } from "@badeball/cypress-cucumber-preprocessor/methods";

/* eslint-env mocha */
/* eslint-disable func-names */

When("I assign a variable to 'this' object", function () {
  this.testVariable = "testValue";
});

Then("'this' object contains the given value", function () {
  expect(this.testVariable).to.equal("testValue");
});
