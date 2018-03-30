var accountSelectors = require('../fixtures/account_selectors.json');
var accountData = require('../fixtures/account_data.json');
// to generate a random data
var faker = require('faker');
var randomEmail = faker.internet.email();

describe('The Sing in form', function() {

  it('1.1 - should open the sing in form', function () {
    cy
    .visit(accountData.baseUrl)
    .get(accountSelectors.signInBtn).click()
    .get(accountSelectors.createAccountForm)
    .should('be.visible')
  });

  it('1.2 - should sign in with a valid email address', function () {
    cy
    .visit(accountData.baseUrl + '/index.php?controller=authentication&back=my-account')
    .get(accountSelectors.signInBtn).click()
    .get(accountSelectors.createAccountEmailInput).type(randomEmail)
    .get(accountSelectors.createAccountBtn).click()
    .get(accountSelectors.firstName)
    .should('be.visible')
  });

  it('1.3 - should not create an account with the invalid email address', function () {
    cy
    .visit(accountData.baseUrl + '/index.php?controller=authentication&back=my-account')
    .get(accountSelectors.signInBtn).click()
    .get(accountSelectors.createAccountEmailInput).type(accountData.invalidEmail)
    .get(accountSelectors.createAccountBtn).click()
    .get(accountSelectors.createAccountEmailInput)
    .should('be.visible')
  });

  it('1.4 - should not create an account with the email address the was already used', function () {
    cy
    .visit(accountData.baseUrl + '/index.php?controller=authentication&back=my-account')
    .get(accountSelectors.signInBtn).click()
    .get(accountSelectors.createAccountEmailInput).type(accountData.usedEmail)
    .get(accountSelectors.createAccountBtn).click()
    .get(accountSelectors.createAccountError)
    .should('contain', 'An account using this email address has already been registered. Please enter a valid password or request a new one. ')
  });
});