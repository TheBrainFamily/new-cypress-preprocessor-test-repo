import { Given, Then, When, And, But } from "@badeball/cypress-cucumber-preprocessor/methods";

let selectedFruit;

Given(/I choose (Apple|Banana)/, (selection) => {
  selectedFruit = selection;
});

Then("{word} is chosen", (selection) => {
  expect(selectedFruit).to.equal(selection);
});
