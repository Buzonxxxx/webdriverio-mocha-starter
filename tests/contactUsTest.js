const request = require("sync-request");
const ContactUS_Page = require("../pageObjects/ContactUS_Page");

beforeEach(() => {
  browser.url("/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUniversity", () => {
  const res = request(
    "GET",
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  let contactDetails = JSON.parse(res.getBody().toString("utf8"));
  contactDetails.length = 3; // get first 3 contact details

  contactDetails.forEach(contactDetail => {
    it("Should be able to submit a successful submission via contact us form", () => {
      ContactUS_Page.submitAllInformation(
        "Louis",
        "Liao",
        contactDetail.email,
        contactDetail.body
      );
      ContactUS_Page.confirmSuccessfulSubmission();
    });
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    ContactUS_Page.submitAllInformation(
      "Mike",
      "Woods",
      "mike_woods@gmail.com",
      null
    );
    ContactUS_Page.confirmUnsuccessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    ContactUS_Page.submitAllInformation(
      "Sara",
      null,
      "sara_woods@gmail.com",
      null
    );
    ContactUS_Page.confirmUnsuccessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    ContactUS_Page.submitAllInformation("Jim,", "James", null, null);
    ContactUS_Page.confirmUnsuccessfulSubmission();
  });
});
