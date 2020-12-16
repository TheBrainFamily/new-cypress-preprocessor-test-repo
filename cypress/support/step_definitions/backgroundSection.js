import { Given, Then, When, And, But } from "@badeball/cypress-cucumber-preprocessor/methods";



let counter = 0;
console.log(window);
Given("counter is incremented", () => {
  counter += 1;
});

Then("counter equals {int}", (value) => {
  expect(counter).to.equal(value);
});
