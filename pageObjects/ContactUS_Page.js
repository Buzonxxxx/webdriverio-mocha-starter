class ContactUs_Page {
  get firstName() { return $("[name='first_name']");}
  get lastName() { return $("[name='last_name']");}
  get email() { return $("[name='email']");}
  get message() { return $("[name='message']");}
  get submitButton() { return $('[type="submit"]');}
  get successfulSubmissionHeader() { return $("#contact_reply h1");}
  get unsuccessfulSubmissionHeader() { return $("body");}
}

module.exports = new ContactUs_Page();