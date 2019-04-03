beforeEach(() => {
	browser.url("Hidden-Elements/index.html");
})

describe('Test whether specific elements are visible within viewport', () => {

	it('should resize the current viewport', () => {
		  browser.setViewportSize({
				width: 1200,
				height: 800
			})
			browser.pause(2000);
			const { width, height } = browser.windowHandleSize().value; // include tab area
			console.log(`window size width: ${width}`)
			console.log(`window size height: ${height}`) 
		});

	it('should detect if an element is visible', () => {
		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#not-displayed");
		console.log(isVisibleWithinViewport); //false

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#visibility-hidden");
		console.log(isVisibleWithinViewport); //false

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#zero-opacity");
		console.log(isVisibleWithinViewport); //false

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("h1");
		console.log(isVisibleWithinViewport); //true

		const width = browser.getViewportSize("width");
		console.log(`Viewport width: ${width}`)
		const height = browser.getViewportSize("height");
		console.log(`Viewport height: ${height}`)
	});
});