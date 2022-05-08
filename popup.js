let activatebutton = document.getElementById("activate");
activatebutton.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	console.log(tab);
	
	let url = tab.url;
	if (url.slice(0,29) == 'https://www.google.com/search') {
		if (url.includes('q=minesweeper&')) {
			addsolver(tab);
		}
	} else if (url == 'https://www.google.com/fbx?fbx=minesweeper') {
		addsolver(tab);
	}
});

function addsolver(tab) {
	console.log('Correct url');
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: doSomething,
	});
}

function doSomething() {
	let board_controller = 'c20dae'
	let board = document.querySelector('[jscontroller=',board_controller,']');
	console.log(board);
}
