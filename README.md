# README #

This Project based upon Automation tool Cypress along with BDD and Page Object Model as POC

### Cypress - Java Script ###

* Cypress - Java Script
* Page Object Model

### Cucumber BDD ###

* Use of Backgroud Keyword
* Scenario/s
* Scenario with Data Table Examples
* Scenario Outline with Examples
* Gherkin Tagging

### Cypress Basic Commands ###
* Install cypress in the locale machine (pre-requisite - node should be installed in the machine)
* npm install --save-dev cypress@9.5.1
* Open Cypress Launcher
* -> npx cypress open
* Run all test form default electorn browser thorugh cypress in headless mode
* -> npx cypress run
* Run all test form chrome browser thorugh cypress in headless mode
* -> npx cypress run --browser chrome
* Run all tests in chrome browser headed mode
* -> npx cypress run --headed --browser chrome 
* -> npx cypress run --headed --browser electron
* Run cypress with specificed tag with headless mode with default electorn browser
* -> npx cypress-tags run -e TAGS='@smoke'
* Run cypress with specificed tag with chrome browser headed mode
* -> npx cypress-tags run -e TAGS='@regression' --headed --browser chrome