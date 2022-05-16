function doSomething() {
	let first_child = document.getElementById('EYPL8e').children[0];
	let right = window.getComputedStyle(first_child).getPropertyValue('right');
	right = right.substring(0, right.length-2);
	right = parseInt(right, 10);
	document.getElementById('EYPL8e').innerHTML = `<span style="color:white; position: absolute;top: 10px; right: ${right + 40}px; font-size:25px; cursor: pointer;" id="solve">&lt/></span>` + document.getElementById('EYPL8e').innerHTML;
	document.getElementById('solve').addEventListener('click', solve());
}

function solve() {
	let board_controller = '[jscontroller=c20dae]';
	let board = document.querySelector(board_controller);
	console.log(board);
}

doSomething();
