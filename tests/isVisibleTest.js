beforeEach(() => {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements are visible', () => {
  it('Button display is set to non display therefore should return false', () => {
  	var isVisible = browser.isVisible('#not-displayed');
		assert.equal(isVisible, false);
  });

  it('Button display is set to visibility hidden therefore should return false', () => {
  	var isVisible = browser.isVisible('#visibility-hidden');
  	assert.equal(isVisible, false);
  });

  it('Button display is set to zero opacity therefore should return false', () => {
  	var isVisible = browser.isVisible('#zero-opacity');
  	assert.equal(isVisible, false);
  });

  it('Header text is visible therefore should return true', () => {
  	var isVisible = browser.isVisible('h1');
		assert.ok(isVisible);
  });
});