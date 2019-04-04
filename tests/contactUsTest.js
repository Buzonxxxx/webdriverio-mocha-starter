beforeEach(() => {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', () => {
    beforeEach(() => {
      console.log('Inside the describe block!');
    })
  it('Should be able to submit a successful submission via contact us form', () => {
    browser.setValue("[name='first_name']",'Louis');
    browser.setValue("[name='last_name']",'Liao');
    browser.setValue("[name='email']",'xxx@gmail.com');
    browser.setValue("[name='message']",'Hi there!');
    browser.click('[type="submit"]');

    const successfulContactConfirmation = browser.isExisting("#contact_reply h1");
    assert.equal(successfulContactConfirmation, true, "Successful submission Message does not exist!");
    const successfulSubmission = browser.getText("#contact_reply h1");
    assert.equal(successfulSubmission, "Thank You for your Message!");

    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    browser.setValue("[name='first_name']",'Mike');
    browser.setValue("[name='last_name']",'Woods');
    browser.setValue("[name='email']",'mike_woods@gmail.com');
    browser.click('[type="submit"]');

    const successfulContactConfirmation = browser.isExisting("#contact_reply h1");
    assert.equal(successfulContactConfirmation, false);
    });
  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    browser.setValue("[name='first_name']",'Sara');
    browser.setValue("[name='email']",'sara_woods@gmail.com');
    browser.click('[type="submit"]');

    const successfulContactConfirmation = browser.isExisting("#contact_reply h1");
    assert.equal(successfulContactConfirmation, false);
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    browser.setValue("[name='first_name']",'Jim');
    browser.setValue("[name='last_name']",'James');
    browser.click('[type="submit"]');

    let errorText = browser.getText("body");
    expect(errorText).to.include('Error: all fields are required')

    errorText = browser.isVisible('body');
    expect(errorText, 'Error message is no visible').to.be.true;
    });
});