describe('Test the webdriveruniversity homepage', () => {
  it('Output the height of the homepage carousel', function() {
    browser.url('/')
    browser.pause(2000)
    const divCarouselSelector = "#udemy-promo-thumbnail" 
    const divCarouselHeight = browser.getCssProperty(divCarouselSelector, 'height')
    const divCarouselBorderColor = browser.getCssProperty(divCarouselSelector, 'border-color')
    console.log(divCarouselHeight)
    console.log(divCarouselBorderColor)
  })
})