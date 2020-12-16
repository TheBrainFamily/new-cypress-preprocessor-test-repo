import { Given, Then, When, And, But } from "@badeball/cypress-cucumber-preprocessor/methods";


let isPresentInTagsEnv;
const cypressEnvTags = Cypress.env("TAGS");

Given(/'(.+)' is in current TAGS environmental variable/, (envTagsString) => {
  isPresentInTagsEnv = RegExp(envTagsString).test(cypressEnvTags);
});

Then(/this should (not )?run/, (shouldNotRun) => {
  if (typeof cypressEnvTags !== "undefined") {
    expect(!shouldNotRun).to.equal(isPresentInTagsEnv);
  }
});
