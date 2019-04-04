beforeEach(() => {
	browser.url("/Accordion/index.html");
})

describe('Validate the loading functionality works correctly', () => {
	it('Verify relevant text LOADING COMPLETE appears after a period of time', function () {
		this.timeout(20000);
		// browser.waitUntil(condition[,timeout][,timeoutMsg][,interval]);
		browser.waitUntil( () => browser.getText('#hidden-text') === 'LOADING COMPLETE.', 12000, 'expected text to be different!');
	});
});