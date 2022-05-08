let activatebutton = document.getElementById("activate");
activatebutton.addEventListener("click", async () => {
	let tab = await chrome.tabs.query({ active: true, currentWindow: true });
	console.log(tab);
});
