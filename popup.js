async function getCurrentTab() {
	let tab = await chrome.tabs.query({ active: true, currentWindow: true });
	return tab;
}

async function activate() {
	let tab = await getCurrentTab();
	console.log(tab);
}
