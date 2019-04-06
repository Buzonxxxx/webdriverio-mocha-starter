# WebdriverIO-Mocha-Starter
This repo incluse some sample tests/codes about how to use WebdirvierIO v4

####Steps

1. Git clone the [repo]
> `git clone [repo]`
2. Install dependencies 
> `npm install`
3. Execute test
> `npm test`

##Note:
* Execute specific test
`npm test -- --spec=tests/TEST FILE NAME`

* Select differnet test dev
`SERVER=prod npm test`

* Enter debug Mode
  1. Add `browser.debug()` in your test file
  2. Execute below command
`DEBUG=true npm test`

* Allure report (https://docs.qameta.io/allure/)
  1. Install wdio-allure-reporter and add settings in wdio_conf.js
  2. Install allure-commandline
`npm install -g allure-commandline`
  3. Execute test to generate allure results 
  `npm test`
  4. Generate allure report 
  `allure generate ./reports/allure-results[,--clean]`
  5. Open allure report
  `allure open`

* Install Ranorex selocity to get css/xpath
https://chrome.google.com/webstore/detail/ranorex-selocity/ocgghcnnjekfpbmafindjmijdpopafoe?utm_source=chrome-ntp-icon

