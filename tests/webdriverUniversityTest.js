describe('Verify whether webdriveruniversity links on homepage work correctly', () => {
  it('check that the contact us button opens the contact us page',  () => {
    // browser.setViewportSize({
    //   width: 1200,
    //   height: 800
    // })
    browser.url('/')
    let title = browser.getTitle()
    assert.equal(title, 'WebDriverUniversity.com') //assert
    expect(title).to.equal('WebDriverUniversity.com') //expect
    title.should.equal('WebDriverUniversity.com') //chai
    console.log(`Title is: ${title}`)
    // browser.debug()

    browser.click('#contact-us')
    const tabIds = browser.getTabIds();
    console.log(tabIds);
    browser.switchTab(tabIds[1]);
    const title2 = browser.getTitle()
    assert.equal(title2, 'WebDriver | Contact Us') 

    const url = browser.getUrl();
    expect(url).include('Contact-Us', 'URL Mismatch')
    browser.close();
  })
  it('check that the login button opens the login portal page',  () => {
    browser.url('/')
    const title = browser.getTitle()
    title.should.equal('WebDriverUniversity.com')
    console.log(`Title is: ${title}`)

    browser.click('#login-portal')
    const tabIds = browser.getTabIds();
    browser.switchTab(tabIds[1]);
    const title2 = browser.getTitle()
    assert.equal(title2, 'WebDriver | Login Portal') 

    const url = browser.getUrl();
    expect(url).include('Login-Portal', 'URL Mismatch')
  })
})