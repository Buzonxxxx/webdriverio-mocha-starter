beforeEach(() => {
	browser.url("/Accordion/index.html");
})
describe('Verify that the correct text appears on the accordion page', () => {
	it('Verify loading complete text is visible after a set duration of time', function() {
		this.timeout(20000);
		const elem = $('#hidden-text'); // $ command is a short way to call the element
		console.log(elem.getText());
		elem.waitForText(1000);

		while (elem.getText() != 'LOADING COMPLETE.') {
			browser.pause(1000);
		}
		console.log(elem.getText());

	});
});