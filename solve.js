function doSomething() {
	let first_child = document.getElementById('EYPL8e').children[0];
	let right = window.getComputedStyle(first_child).getPropertyValue('right');
	console.log(right);
	document.getElementById('EYPL8e').innerHTML = '<span style="color:white; position: absolute;top: 15px; right: 110px; font-size:25px; cursor: pointer;" id="solve">&lt/></span>' + document.getElementById('EYPL8e').innerHTML;
	document.getElementById('solve').addEventListener('click', solve());
}

function solve() {
	let board_controller = '[jscontroller=c20dae]';
	let board = document.querySelector(board_controller);
	console.log(board);
	console.log(board[1]);
}

doSomething();
