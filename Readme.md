# Content

The repository contains a Cypress test suite and a postman test suite. Whilst it is true there are only 2-3 tests per suite, let's not hurt their feelings and call them anything else but a test suite. 
In the Cypress folder there is a file for the UI  tests and another file for the API tests. I took the liberty to add the same requested API tests in Cypress, since the UI tests were feeling kind of lonely in that project. 

## Installation

### Postman 
 Postman is a standalone tool designed to test APIs. It can be install following the link: https://www.postman.com/downloads/ and following the installation instructions. 
 
 After Postman is installed, in order to load the tests in Postman, import the tests "collection" file and the "environment variables" file in Postman. 

 
### Cypress
 Cypress is Javascript testing framework. 
 To have everything ready in order to run the tests, you need to install VisualStudioCode as an IDE - https://code.visualstudio.com/. 
 Since Cypress runs using Javascript, make sure you have installed node.js on your PC. Follow this link and the instructions to manage this: https://nodejs.org/en/download. 
 It is higly suggested that you also install NPX package to NPM, which will help in executing the binaries of npm packages. To install NPX library follow the instructions here: https://www.npmjs.com/package/npx
 
 To get everything ready for running the tests follow these instructions:
 - Open VisualStudioCode.
 - In the editor, load the folder named "CypressTests". 
 - Open a terminal and install the Cypress packages to this repository by running the command
   npm install cypress@latest or npm install cypress--save-dev
   For more information about installing Cypress please follow the instructions at: https://docs.cypress.io/guides/getting-started/installing-cypress
 - In the terminal also run the command to add the "days.js" library since it is used in the tests. The command to install it is: "npm install dayjs" 
 
 
## Usage:

### Postman:
  To run the Postman tests make sure that after you've imported both the collection and the environment variables, you've also selected the correct Environmnent file to use in the tests. 
  You can run the test indiviually since they are not connected.
  You can run the test as a collection by Clicking the three dots on the collection folder and selecting "Run Collection".
  
### Cypress
  Since the Cypress collection contains both API tests and UI tests, which use a different BaseUrl, you will not be able to run both suites in one run. 
  
  Running the tests from the Cypress UI:
  The config.js file contains both of the BaseURL needed, so if the user wants to run the tests from the Cypress UI, uncomment the target BaseURL and comment the other one. 
  Running the tests from the UI can be done by opening a terminal and opening the Cypress runner. Use the following command :  "npx cypress open". 
  
  Running the tests from the terminal:
  The best practice is to run the tests from the terminal, which can be done by using the following command:
  
  For the UI tests:
  - in the terminal use: 
  npx cypress run --reporter junit --browser chrome --config baseUrl="https://way2automation.com/way2auto_jquery" --spec "cypress\e2e\UITests.cy.js"
  
  For the UI tests:
  - in the terminal use: 
  npx cypress run --reporter junit --browser chrome --config baseUrl="https://jsonplaceholder.typicode.com" --spec "cypress\e2e\apiTests.cy.js"
  
NOTE: The commands to run the tests replaces the BaseURL set in the file with the correct target BaseURL for each collection. 
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 