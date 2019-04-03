beforeEach(() => {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', () => {
  it('Button display is set to non display but still exists in html dom therefore should return true', function(done) {
    const isEnabled = browser.isExisting('#not-displayed');
    assert.ok(isEnabled);
  });

  it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function(done) {
    const isEnabled = browser.isExisting('#visibility-hidden');
    assert.ok(isEnabled);
  });

  it('Button display is set to zero opacity but still exists in html dom therefore should return true', function(done) {
    const isEnabled = browser.isExisting('#zero-opacity');
    assert.ok(isEnabled);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    const isEnabled = browser.isExisting('h1');
    assert.ok(isEnabled);
  });
  
  it('There is no such element with the id of #no-such-element within the html dom therefore should return false', function(done) {
    const isEnabled = browser.isExisting('no-such-element');
    assert.equal(isEnabled, false);
  });
});