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
	let board_controller = '[jscontroller=c20dae]';
	let board = document.querySelector(board_controller);
	console.log(board);
	document.getElementById('EYPL8e').innerHTML = '<span style="color:white; position: absolute;top: 10px; right: 110px; font-size:25px; cursor: pointer;" id="solve">&lt/></span>' + document.getElementById('EYPL8e').innerHTML;
	document.getElementById('click', solve());
}

function solve() {
	console.log('This is called');
}
