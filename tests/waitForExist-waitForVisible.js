beforeEach(() => {
  browser.url("/Ajax-Loader/index.html");
})

describe('Validate whether the click me button is visible', () => {
  it('Validate whether the click me button code is visible within the DOM', function() {
      this.timeout(20000);
      const clickMeButton = "//p[text()='CLICK ME!']";
      browser.waitForExist(clickMeButton, 8000, false); //browser.waitForExist(selector[,ms][,reverse]);
  });

  it('Validate whether the click me button appears once the Ajax loader fully loads', function() {
    this.timeout(20000);
    const clickMeButton = "//p[text()='CLICK ME!']";
    browser.waitForVisible(clickMeButton, 8000, false);
  });

});