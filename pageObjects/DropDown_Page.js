class DropDown_Page {
  get checkboxButtonOne() {
    return $("#checkboxes label:nth-of-type(1) [type]");
  }
  get checkboxButtonTwo() {
    return $("#checkboxes label:nth-child(3) [type]");
  }

  VerifyCheckboxButtonOneFocus() {
    const isFocus = this.checkboxButtonOne.hasFocus();
    console.log(`Checkbox button one has a value of: ${isFocus}`);
    expect(isFocus, "The checkbox (One) should have focus!").to.be.true;
  }

  VerifyCheckboxButtonTwoFocus() {
    const isFocus = this.checkboxButtonTwo.hasFocus();
    console.log(`Checkbox button two has a value of: ${isFocus}`);
    expect(isFocus, "The checkbox (two) should have focus!").to.be.false;
  }
}
module.exports = new DropDown_Page();
