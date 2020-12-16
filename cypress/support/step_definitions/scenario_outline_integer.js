import { Given, Then, When, And, But } from "@badeball/cypress-cucumber-preprocessor/methods";


// you can have external state, and also require things!
let sum = 0;

When("I add {int} and {int}", (a, b) => {
  sum = a + b;
});

Then("I verify that the result is equal the {int}", (result) => {
  expect(sum).to.equal(result);
});
