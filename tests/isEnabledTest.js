beforeEach(() => {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  browser.setViewportSize({
		width: 1200,
		height: 800
	})
	browser.pause(2000);
})

describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', () => {
  it('Dropdown item orange is disabled therefore should return false', () => {
    const isEnabled = browser.isEnabled("option[value='orange']");
    console.log(`Dropdown item orange has a value of: ${isEnabled}`)
    assert.equal(isEnabled, false); 
  });
  
  it('Dropdown item grape is enabled therefore should return true', () => {
    const isEnabled = browser.isEnabled("option[value='grape']");
    console.log(`Dropdown item grape has a value of: ${isEnabled}`)
    assert.equal(isEnabled, true); 
  });
  
  it('Option2 is enabled therefore should return true', () => {
    const isEnabled = browser.isEnabled("input[value='option-2']");
    console.log(`Option2 has a value of: ${isEnabled}`)
    assert.equal(isEnabled, true); 
  });
  
  it('Radio button pumpkin is enabled therefore should be true', () => {
    const isEnabled = browser.isEnabled("input[value='pumpkin']");
    console.log(`Radio button pumpkin has a value of: ${isEnabled}`)
    assert.equal(isEnabled, true); 
  });
  
  it('Radio button cabbage is disabled therefore should be false', () => {
    const isEnabled = browser.isEnabled("input[value='cabbage']");
    console.log(`Radio button cabbage has a value of: ${isEnabled}`)
    assert.equal(isEnabled, false); 
  });
});