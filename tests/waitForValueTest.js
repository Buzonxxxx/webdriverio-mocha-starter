beforeEach(() => {
  browser.url("/Accordion/index.html");
})

describe('Validate text is present', () => {
  it('Verify text exists within the loading div container', function () {
    this.timeout(20000);
    const text = browser.waitForValue('#hidden-text', 2000);
    assert.ok(text);
    });
});