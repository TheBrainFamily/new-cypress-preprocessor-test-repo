import { Given, Then, When, And, But } from "@badeball/cypress-cucumber-preprocessor/methods";

/* eslint-env mocha */
import defaultData, { namedData } from "./importingFilesData";

Given(`I imported a file`, () => {});

Then(`I can access imported file data`, () => {
  expect(defaultData).to.equal(true);
  expect(namedData).to.equal(false);
});
