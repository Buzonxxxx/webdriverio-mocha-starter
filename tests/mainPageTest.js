const Main_Page = require("../pageObjects/Main_Page");

beforeEach(() => {
  browser.url("/");
});

describe("Verify whether webdriveruniversity links on homepage work correctly", () => {
  it("check that the contact us button opens the contact us page", () => {
    Main_Page.verifyMainPageTitle();
    Main_Page.verifyContactUSPageTitle();
    Main_Page.verifyContactUSPageUrl();
    Main_Page.close();
  });
  it("check that the login button opens the login portal page", () => {
    Main_Page.verifyMainPageTitle();
    Main_Page.verifyLoginPortalPageTitle();
    Main_Page.verifyLoginPortalPageUrl();
  });
});
