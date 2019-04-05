beforeEach(() => {
	browser.url("https://www.w3schools.com/html/html5_video.asp");
})

//Injects a snippet of JavaScript into the page for execution in the context of the currently selected frame.
//在browser console裡面跑指令
browser.addCommand('isVideoPaused', () => {
	const isPaused = browser.execute(() => {
		console.log("Outputted inside the console window"); // output in borwser console
		const video = document.querySelector("#video1");	
		return video.paused;
	})
	return isPaused.value;	
});

describe('Video test', () => {
	it('Validate that the video is paused when accessing the page', function() {
		this.timeout(20000);
		browser.pause(6000);
		const isPaused = browser.isVideoPaused();
		assert.ok(isPaused);
		browser.pause(6000);
	});

	it('Alter the width of the video', () => {
		const videoWidth = browser.execute(() => {
			const video = document.querySelector("#video1");
			return video.style.width = "300px";
		})
		browser.pause(6000);
	});
});
