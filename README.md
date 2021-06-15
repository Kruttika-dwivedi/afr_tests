**Prerequisties**

Java, Node module manager and Nodejs stable version should be installed on local machine
Verify the same by running below commands in terminal

* java --version
* node --version
* npm --version


**Tech Stack**

* WebdriverIO (JavaScript based framework) is used.
* WebdriverIO has inbuilt assertion library and Test Runner(spec) support.
* Test scenarios can be found in scenario.md file
* Mocha (describe,it syntax ) is used to write test cases in specs/TC100_afrLandingPage.js
* Page Object model is used to design tests, can be found in tests/pageobjects
* All the test configuration(base url, chrome options) is present in wdio.conf.js file in root directory.


**Setting up locally**

* Clone the repo to your local from https://github.com/Kruttika-dwivedi/afr_tests/
* In the terminal run 'npm ci' command to install the dependencies
* To execute test cases run 'npm run test'
* Verify that spec file is passing all test cases
* Verify the screenshots(one with popup and one without) in screenshots directory
