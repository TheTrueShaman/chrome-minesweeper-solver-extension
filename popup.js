let activatebutton = document.getElementById("activate");
activatebutton.addEventListener("click", async () => {
	let tab = await chrome.tabs.query({ active: true, currentWindow: true });
	console.log(tab);
	
	let url = tab.url
	if (url.slice(0,29) == 'https://www.google.com/search') {
		if (url.includes('q=minesweeper&')) {
			addsolver()
		}
	} else if (url == 'https://www.google.com/fbx?fbx=minesweeper') {
		addsolver()
	}
});

function addsolver() {
	console.log('Correct url');
}
