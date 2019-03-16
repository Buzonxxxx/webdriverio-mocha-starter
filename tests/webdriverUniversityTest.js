describe('Verify whether webdriveruniversity links on homepage work correctly', () => {
  it('check that the contact us button opens the contact us page',  () => {
    browser.setViewportSize({
      width: 1200,
      height: 800
    })
    browser.url('/')
    const title = browser.getTitle()
    assert.equal(title, 'WebDriverUniversity.com')
    expect(title).to.equal('WebDriverUniversity.com')
    title.should.equal('WebDriverUniversity.com')
    console.log(`Title is: ${title}`)
    // browser.debug()
    browser.click('#contact-us')
    browser.pause(3000)
  })
  it('check that the login button opens the login portal page',  () => {
    browser.url('/')
    browser.click('#login-portal')
    const title = browser.getTitle()
    assert.equal(title, 'WebDriverUniversity.com')
    expect(title).to.equal('WebDriverUniversity.com')
    title.should.equal('WebDriverUniversity.com')
    console.log(`Title is: ${title}`)
    browser.pause(3000)
  })
})