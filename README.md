My projects and exercises related to software testing. I created tests using Cypress + Mocha + chai.

### Before running tests configure node.js and npm

Ensure that you have node.js and npm installed by checking their versions.
```
    $ npm -v
    $ node -v
```
If they are not installed, download and install node.js (including npm) from the [Node.js website](https://nodejs.org/en/download/)

If the node.js and npm were installed long time ago, they may need an update to the latest version.
```
    $ npm install -g update-node
    $ npm install npm@latest -g
```

## Cypress Setup

### Install Cypress using the package.json

1. Go to the uitests-cypress folder.
2. Install dependencies from the package.json file.
```
    $ npm install
```

The info how to install Cypress from the beginning can be found [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#)

## Run tests

1. Run Cypress by using one of the following commands:

Run tests headlessly:

```
    $ npx cypress run
```

For the default Cypress browser - Electron, tests are being recorded when running headlessly.


Run tests via the Test Runner GUI:

```
    $ npm run cypress:open
```
```
    $ npx cypress open
```

When the Cypress GUI opens, click the test file name to run it (example_spec.js is a default Cypress test file containing 90 tests to show how it works).

To run a specific test suite only, use the following command:

```
    $ npx cypress run --spec cypress/integration/app_spec.js

```
More commands can be found [here](https://docs.cypress.io/guides/guides/command-line.html#)
