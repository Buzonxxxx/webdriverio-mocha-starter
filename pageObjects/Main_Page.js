class Main_Page {
  get contactUs() {
    return $("#contact-us");
  }
  get loginPortal() {
    return $("#login-portal");
  }

  getTitle() {
    return browser.getTitle();
  }
  getTabIDs() {
    return browser.getTabIds();
  }
  switchTab(tabID) {
    return browser.switchTab(tabID);
  }
  getUrl() {
    return browser.getUrl();
  }
  close() {
    return browser.close();
  }
  verifyMainPageTitle() {
    const title = this.getTitle();
    expect(title).to.equal("WebDriverUniversity.com");
  }
  verifyContactUSPageTitle() {
    this.contactUs.click();
    const tabIDs = this.getTabIDs();
    this.switchTab(tabIDs[1]);
    const title = this.getTitle();
    expect(title).to.equal("WebDriver | Contact Us");
  }
  verifyLoginPortalPageTitle() {
    this.loginPortal.click();
    const tabIDs = this.getTabIDs();
    this.switchTab(tabIDs[1]);
    const title = this.getTitle();
    expect(title).to.equal("WebDriver | Login Portal");
  }
  verifyContactUSPageUrl() {
    const url = this.getUrl();
    expect(url).include("Contact-Us", "URL Mismatch");
  }
  verifyLoginPortalPageUrl() {
    const url = this.getUrl();
    expect(url).include("Login-Portal", "URL Mismatch");
  }
}
module.exports = new Main_Page();
