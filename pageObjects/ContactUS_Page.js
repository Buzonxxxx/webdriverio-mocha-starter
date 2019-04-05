class ContactUs_Page {
  get firstName() { return $("[name='first_name']");}
  get lastName() { return $("[name='last_name']");}
  get email() { return $("[name='email']");}
  get message() { return $("[name='message']");}
  get submitButton() { return $('[type="submit"]');}
  get successfulSubmissionHeader() { return $("#contact_reply h1");}
  get unsuccessfulSubmissionHeader() { return $("body");}

  setFirstName(first_name) {
    return this.firstName.setValue(first_name);
  }  
  setLastName(last_name) { 
    return this.lastName.setValue(last_name);
  }
  setEmail(email) {
    return this.email.setValue(email);
  } 
  setMessage(message) {
    return this.message.setValue(message);
  }
  clickSubmitButton() {
    return this.submitButton.click();
  } 
  submitAllInformation(firstName, lastName, email, message) {
    if(firstName) this.setFirstName(firstName);
    if(lastName) this.setLastName(lastName);
    if(email) this.setEmail(email);
    if(message) this.setMessage(message);
    this.clickSubmitButton();
  }
  confirmSuccessfulSubmission() {
    const validateSubmissionHeader = browser.waitUntil( () => this.successfulSubmissionHeader.getText() == "Thank You for your Message!", 3000);
    expect(validateSubmissionHeader, "Successful submission Message does not exist!").to.be.true;
  };
  
  confirmUnsuccessfulSubmission() {
    expect(this.unsuccessfulSubmissionHeader.getText()).to.include("Error: all fields are required");
  };
}
module.exports = new ContactUs_Page();