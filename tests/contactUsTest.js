const request = require("sync-request");

beforeEach(() => {
  browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUniversity", () => {
  const res = request("GET", "https://jsonplaceholder.typicode.com/posts/1/comments");
  let contactDetails = JSON.parse(res.getBody().toString("utf8"));
  contactDetails.length = 3; // get first 3 contact details

  const firstNameSelector = "[name='first_name']";
  const lastNameSelector = "[name='last_name']";
  const emailSelector = "[name='email']";
  const messageSelector = "[name='message']";
  const successfulSubmissionSelector = "#contact_reply h1";
  const unsuccessfulSubmissionSelector = "body";
  const submitButtonSelector = '[type="submit"]';

  const setFirstName = first_name => browser.setValue(firstNameSelector, first_name);
  const setLastName = last_name => browser.setValue(lastNameSelector, last_name);
  const setEmail = email => browser.setValue(emailSelector, email);
  const setMessage = message => browser.setValue(messageSelector, message);
  const clickSubmitButton = () => browser.click(submitButtonSelector);
  const confirmSuccessfulSubmission = () => {
    const validateSubmissionHeader = browser.waitUntil( () => browser.getText(successfulSubmissionSelector) == "Thank You for your Message!", 3000);
    expect(validateSubmissionHeader, "Successful submission Message does not exist!").to.be.true;
  };
  const confirmUnsuccessfulSubmission = () => {
    expect(browser.getText(unsuccessfulSubmissionSelector)).to.include("Error: all fields are required");
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
