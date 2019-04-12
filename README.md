# WebdriverIO-Mocha-Starter

This repo incluse some sample tests/codes about how to use WebdirvierIO v4

## Trigger Test

  1. Git clone the [repo]
  `git clone [repo]`

  2. Install dependencies 
  `npm install`

  3. Execute test
  `npm test`

## Allure Report Integration (https://docs.qameta.io/allure/)

  1. Install wdio-allure-reporter
`npm install wdio-allure-reporter --save-dev`  
  2. Add allure report setting in wdio_conf.js
  3. Install allure-commandline
`npm install -g allure-commandline`
  4. Execute test to generate allure results 
  `npm test`
  5. Generate allure report 
  `allure generate ./reports/allure-results[,--clean]`
  6. Open allure report
  `allure open`

## Jenkin Integration (https://jenkins.io/download/)

1. Download `.war` jankins package from jenkins website
2. Execute file
  `java -jar jenkins.war --httpPort=[port]`

3. Finish setup and install plugins
    * NodeJS
    * HTML Publisher
    * Post build task` plugins
4. Manage Jenkins> Global Tool Configuration> NodsJS> Global npm packages to install (`bower@~1.8.0 grunt-cli@~1.2.0`)  
5. Manage Jenkins> Configure System> Environment variables> PATH
e.g. `$PATH:/Users/[domain name]/.nvm/versions/node/v8.6.0/lib/node_modules/npm/bin`)
6. Create freestyle job 
    * Setup custom workspace 
    e.g. `/Users/[domain name]/code/webdriverio-mocha-starter/node_modules/.bin`
    * Steup string parameter (Name: `baseUrl`, Default Value: `http://www.webdriveruniversity.com/`)
    * Steup string parameter (Name: `automationTest`, Default Value: `tests/contactUsTest.js`)
    * Steup string parameter (Name: `logType`, Default Value: `silent`)
7. Build> Execute Shell

  ~~~~js
    npm install
    npm test -- --baseUrl="$baseUrl" --spec="$automationTest" --logLevel="$logType"
  ~~~~

## Allure report and Jenkins Integration

1. Post-build Actions> Post build task
    * Add two post build tasks
    1.
    ~~~~
    cd /Users/[domain name]/Desktop/

    if [! -d /Users/[domain name]/Desktop/Allure_Reports ]; then
    mkdir Allure_Reports;
    ~~~~
    2. 
    ~~~~
    cd /Users/[domain name]/Desktop/Allure_Reports

    cp -R /Users/[domain name]/code/webdriverio-mocha-starter/reports /Users/[domain name]/Desktop/Allure_Reports/${BUILD_NUMBER}
    ~~~~
fi

## Note

* Execute specific test
`npm test -- --spec=tests/TEST FILE NAME`

* Select differnet test dev
`SERVER=prod npm test`

* Enter debug Mode
  1. Add `browser.debug()` in your test file
  2. Execute below command
`DEBUG=true npm test`

* Install Ranorex selocity to get css/xpath
https://chrome.google.com/webstore/detail/ranorex-selocity/ocgghcnnjekfpbmafindjmijdpopafoe?utm_source=chrome-ntp-icon
