var assert = require('assert');

describe('xpaexchange page', () => {
    it('should have the right title - xpaexchange', () => {
        browser.url('https://xpa.exchange/#/exchange');
        title = browser.getTitle();
        assert.equal(title, 'xpaexchange');
    });
});


