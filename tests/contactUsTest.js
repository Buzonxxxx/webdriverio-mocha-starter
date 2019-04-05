const request = require("sync-request");
const ContactUS_Page = require("../pageObjects/ContactUS_Page");

beforeEach(() => {
  browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUniversity", () => {
  const res = request("GET", "https://jsonplaceholder.typicode.com/posts/1/comments");
  let contactDetails = JSON.parse(res.getBody().toString("utf8"));
  contactDetails.length = 3; // get first 3 contact details

  const setFirstName = first_name => ContactUS_Page.firstName.setValue(first_name);
  const setLastName = last_name => ContactUS_Page.lastName.setValue(last_name);
  const setEmail = email => ContactUS_Page.email.setValue(email);
  const setMessage = message => ContactUS_Page.message.setValue(message);
  const clickSubmitButton = () => ContactUS_Page.submitButton.click();
  const confirmSuccessfulSubmission = () => {
    const validateSubmissionHeader = browser.waitUntil( () => ContactUS_Page.successfulSubmissionHeader.getText() == "Thank You for your Message!", 3000);
    expect(validateSubmissionHeader, "Successful submission Message does not exist!").to.be.true;
  };
  const confirmUnsuccessfulSubmission = () => {
    expect(ContactUS_Page.unsuccessfulSubmissionHeader.getText()).to.include("Error: all fields are required");
  };

  contactDetails.forEach(contactDetail => {
    it("Should be able to submit a successful submission via contact us form", () => {
      setFirstName("Louis");
      setLastName("Liao");
      setEmail(contactDetail.email);
      setMessage(contactDetail.body);
      clickSubmitButton();
      confirmSuccessfulSubmission();
    });
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
      setFirstName("Mike");
      setLastName("Woods");
      setEmail("mike_woods@gmail.com");
      clickSubmitButton();
      confirmUnsuccessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
      setFirstName("Sara");
      setEmail("sara_woods@gmail.com");
      clickSubmitButton();
      confirmUnsuccessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
      setFirstName("Jim");
      setLastName("James");
      clickSubmitButton();
      confirmUnsuccessfulSubmission();
  });
});
