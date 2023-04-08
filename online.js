if (window.location.href == "https://minesweeperonline.com") {
	return;
}

function fetchBoard() {
	// let game = document.getElementByID("game");
	let tiles = document.getElementsByClassName("square");
	console.log(tiles);
	let x = document.getElementsByClassName("bordertb");
	let y = tiles.length / x;
}
