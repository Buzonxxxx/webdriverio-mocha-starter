const DropDown_Page = require("../pageObjects/DropDown_Page");

describe("Test Checkbox Buttons Page", () => {
  browser.url("Dropdown-Checkboxes-RadioButtons/index.html");
  browser.setViewportSize({
    width: 1200,
    height: 800
  });

  it("Should be able to focus on checkbox button elements", () => {
    browser.pause(2000);
    DropDown_Page.checkboxButtonOne.click();
    DropDown_Page.VerifyCheckboxButtonOneFocus();
    DropDown_Page.VerifyCheckboxButtonTwoFocus();
  });
});
