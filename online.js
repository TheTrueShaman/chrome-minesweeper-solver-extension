function fetchBoard() {
	// let game = document.getElementByID("game");
	let tiles = document.getElementsByClassName("square");
	console.log(tiles);
	let x = document.getElementsByClassName("bordertb").length / 3;
	let y = (tiles.length - 2*(x+2)) / (x+2);
}

fetchBoard();
