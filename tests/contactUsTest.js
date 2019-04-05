const request = require('sync-request');

browser.addCommand("submitDataViaContactUSForm", (first_name, last_name, email, message) => {
  if(first_name) browser.setValue("[name='first_name']", first_name);
  if(last_name) browser.setValue("[name='last_name']", last_name);
  if(email) browser.setValue("[name='email']", email);
  if(message) browser.setValue("[name='message']", message);
  browser.click('[type="submit"]');
})


beforeEach(() => {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', () => {
  const res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments')
  let contactDetails = JSON.parse(res.getBody().toString('utf8'));
  contactDetails.length = 3; // get first 3 contact details

    beforeEach(() => {
      console.log('Inside the describe block!');
    })
contactDetails.forEach(contactDetail => {
  it('Should be able to submit a successful submission via contact us form', () => {
    browser.submitDataViaContactUSForm('Louis', 'Liao', contactDetail.email, contactDetail.body);

    const successfulContactConfirmation = browser.isExisting("#contact_reply h1");
    assert.equal(successfulContactConfirmation, true, "Successful submission Message does not exist!");

    const successfulSubmission = browser.getText("#contact_reply h1");
    assert.equal(successfulSubmission, "Thank You for your Message!");
    });
})    

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    browser.submitDataViaContactUSForm('Mike', 'Woods', 'mike_woods@gmail.com', null);

    const successfulContactConfirmation = browser.isExisting("#contact_reply h1");
    assert.equal(successfulContactConfirmation, false);
    });
  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    browser.submitDataViaContactUSForm('Sara', null, 'sara_woods@gmail.com', null);

    const successfulContactConfirmation = browser.isExisting("#contact_reply h1");
    assert.equal(successfulContactConfirmation, false);
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    browser.submitDataViaContactUSForm('Jim', 'James', null, null);

    let errorText = browser.getText("body");
    expect(errorText).to.include('Error: all fields are required')

    errorText = browser.isVisible('body');
    expect(errorText, 'Error message is no visible').to.be.true;
    });
});