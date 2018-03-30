var accountSelectors = require('../fixtures/account_selectors.json');
var accountData = require('../fixtures/account_data.json');
// to generate a random data
var faker = require('faker');
var randomEmail1 = faker.internet.email();
var randomEmail2 = faker.internet.email();
var randomEmail3 = faker.internet.email();
var randomFirstName = faker.name.firstName();
var randomLastName = faker.name.lastName();
var randomPassword = faker.internet.password();
var randomStreetName = faker.address.streetName();
var randomStreetAddress = faker.address.streetAddress();
var randomCompanyName = faker.company.companyName();
var randomCity = faker.address.city();

describe('The Sing in form', function() {

  beforeEach(function () {
    cy
    .visit(accountData.baseUrl + '/index.php?controller=authentication&back=my-account')
    .get(accountSelectors.signInBtn).click()
  });

  it('1.5 - should fill out all personal information fields and register a user', function () {
    cy
    .get(accountSelectors.createAccountEmailInput).type(randomEmail1)
    .get(accountSelectors.createAccountBtn).click()
    .wait(3000)
    .get(accountSelectors.gender).first().click()
    .get(accountSelectors.firstName).type(randomFirstName)
    .get(accountSelectors.lastName).type(randomLastName)
    .get(accountSelectors.password).type(randomPassword)
    .get(accountSelectors.birthDay).select('30')
    .get(accountSelectors.birthMonth).select('March')
    .get(accountSelectors.birthYear).select('1989')
    .get(accountSelectors.newsletter).check()
    .get(accountSelectors.specialOffers).check()
    .get(accountSelectors.companyName).type(randomCompanyName)
    .get(accountSelectors.addressLine1).type(randomStreetName)
    .get(accountSelectors.addressLine2).type(randomStreetAddress)
    .get(accountSelectors.city).type(randomCity)
    .get(accountSelectors.state).select('Alaska')
    .get(accountSelectors.zipCode).type(accountData.zipCode)
    .get(accountSelectors.additionalInfo).type(accountData.additionalInfo)
    .get(accountSelectors.phoneHome).type(accountData.phoneNumber)
    .get(accountSelectors.phoneMobile).type(accountData.phoneNumber)
    .get(accountSelectors.addressAlias).clear()
    .get(accountSelectors.addressAlias).type('Work')
    .get(accountSelectors.registerBtn).click()
    .get(accountSelectors.accountHeader)
    .should('contain', accountData.accountHeader)
  });

  it('1.6 - should not create an account with missing first name', function () {
    cy
    .get(accountSelectors.createAccountEmailInput).type(randomEmail2)
    .get(accountSelectors.createAccountBtn).click()
    .wait(3000)
    .get(accountSelectors.gender).first().click()
    .get(accountSelectors.lastName).type(randomLastName)
    .get(accountSelectors.password).type(randomPassword)
    .get(accountSelectors.birthDay).select('30')
    .get(accountSelectors.birthMonth).select('March')
    .get(accountSelectors.birthYear).select('1989')
    .get(accountSelectors.newsletter).check()
    .get(accountSelectors.specialOffers).check()
    .get(accountSelectors.companyName).type(randomCompanyName)
    .get(accountSelectors.addressLine1).type(randomStreetName)
    .get(accountSelectors.addressLine2).type(randomStreetAddress)
    .get(accountSelectors.city).type(randomCity)
    .get(accountSelectors.state).select('Alaska')
    .get(accountSelectors.zipCode).type(accountData.zipCode)
    .get(accountSelectors.additionalInfo).type(accountData.additionalInfo)
    .get(accountSelectors.phoneHome).type(accountData.phoneNumber)
    .get(accountSelectors.phoneMobile).type(accountData.phoneNumber)
    .get(accountSelectors.addressAlias).clear()
    .get(accountSelectors.addressAlias).type('Work')
    .get(accountSelectors.registerBtn).click()
    .get(accountSelectors.personalInfoError)
    .should('contain', 'firstname is required.')
  });

  it('1.7 - should not create an account with missing phone number', function () {
    cy
    .get(accountSelectors.createAccountEmailInput).type(randomEmail3)
    .get(accountSelectors.createAccountBtn).click()
    .wait(3000)
    .get(accountSelectors.gender).first().click()
    .get(accountSelectors.firstName).type(randomFirstName)
    .get(accountSelectors.lastName).type(randomLastName)
    .get(accountSelectors.password).type(randomPassword)
    .get(accountSelectors.birthDay).select('30')
    .get(accountSelectors.birthMonth).select('March')
    .get(accountSelectors.birthYear).select('1989')
    .get(accountSelectors.newsletter).check()
    .get(accountSelectors.specialOffers).check()
    .get(accountSelectors.companyName).type(randomCompanyName)
    .get(accountSelectors.addressLine1).type(randomStreetName)
    .get(accountSelectors.addressLine2).type(randomStreetAddress)
    .get(accountSelectors.city).type(randomCity)
    .get(accountSelectors.state).select('Alaska')
    .get(accountSelectors.zipCode).type(accountData.zipCode)
    .get(accountSelectors.additionalInfo).type(accountData.additionalInfo)
    .get(accountSelectors.addressAlias).clear()
    .get(accountSelectors.addressAlias).type('Work')
    .get(accountSelectors.registerBtn).click()
    .get(accountSelectors.personalInfoError)
    .should('contain', 'You must register at least one phone number')
  });
});