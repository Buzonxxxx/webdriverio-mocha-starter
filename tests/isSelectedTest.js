beforeEach(() => {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
})

describe('Test Selected Dropdown Menus, Checkboxes & Radio Buttons', () => {
  it('Dropdown item Java is selected therefore should return true', () => {
    const isSelected = browser.isSelected("option[value='java']");
    console.log(`Dropdown item Java has a value of: ${isSelected}`)
    assert.equal(isSelected, true);
  });
  
  it('Dropdown item maven is not selected therefore should return false', () => {
    const isSelected = browser.isSelected("option[value='maven']");
    console.log(`Dropdown item maven has a value of: ${isSelected}`)
    assert.equal(isSelected, false);
  });
  
  it('Option2 is not selected therefore should return false', () => {
    const isSelected = browser.isSelected("input[value='option-2']");
    console.log(`Option2 has a value of: ${isSelected}`)
    assert.equal(isSelected, false);
  });
  
  it('Option3 is selected therefore should return true', () => {
    const isSelected = browser.isSelected("input[value='option-3']");
    console.log(`Option3 has a value of: ${isSelected}`)
    assert.equal(isSelected, true);
  });
  
  it('Radio button pumpkin is selected therefore should be true', () => {
    const isSelected = browser.isSelected("input[value='pumpkin']");
    console.log(`Radio button pumpkin has a value of: ${isSelected}`)
    assert.equal(isSelected, true);
  });
});