const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };
const client = webdriverio.remote(options);

client
    .init()
    .url('http://www.webdriveruniversity.com/')
    .click('#login-portal')
    .getTitle().then(title => console.log(`Title is: ${title}`))
    .end();

    // outputs:
    // "Title is: WebDriverUniversity.com