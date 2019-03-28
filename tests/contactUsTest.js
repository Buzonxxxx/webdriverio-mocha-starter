beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
    beforeEach(() => {
      console.log('Inside the describe block!');
    })
  it('Should be able to submit a successful submission via contact us form', function(done) {
    browser.setValue("[name='first_name']",'Louis');
    browser.setValue("[name='last_name']",'Liao');
    browser.setValue("[name='email']",'xxx@gmail.com');
    browser.setValue("[name='message']",'Hi there!');
    browser.click('[type="submit"]');
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']",'Mike');
    browser.setValue("[name='last_name']",'Woods');
    browser.setValue("[name='email']",'mike_woods@gmail.com');
    browser.click('[type="submit"]');
    });
  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']",'Sara');
    browser.setValue("[name='email']",'sara_woods@gmail.com');
    browser.click('[type="submit"]');
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue("[name='first_name']",'Jim');
    browser.setValue("[name='last_name']",'James');
    browser.click('[type="submit"]');
    });
});