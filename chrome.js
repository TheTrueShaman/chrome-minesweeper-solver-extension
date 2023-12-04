const sizes = {360: {name: "Easy", width: 450, square: 45}, 
	       420: {name: "Medium", width: 540, square: 30}, 
	       500: {name: "Hard", width: 600, square: 25}};

function doSomething() {
	if (!document.getElementById('solve')) {
		let first_child = document.getElementById('EYPL8e').children[0];
		let right = window.getComputedStyle(first_child).getPropertyValue('right');
		right = right.substring(0, right.length-2);
		right = parseInt(right, 10);
		document.getElementById('EYPL8e').innerHTML = `<span style="color:white; position: absolute;top: 10px; right: ${right + 40}px; font-size:25px; cursor: pointer;" id="solve">&lt/></span>` + document.getElementById('EYPL8e').innerHTML;
		document.getElementById('solve').addEventListener('click', solve);
	}
}

function solve() {
	if (!!document.getElementById('newCanvas')) {
		return;
	}

	//originalCanvas is for getting data from
	let canvas_name = '[jsname=UzWXSb]'
	let originalCanvas = document.querySelector(canvas_name);
	var originalPos = findPos(originalCanvas);
	originalCTX = originalCanvas.getContext("2d");	
	console.log(originalCTX.getContextAttributes().willReadFrequently);

	let originalDimensions = {height: originalCanvas.height, width: originalCanvas.width};

	//newCanvas is for drawing on
	let newCanvas = '<canvas id="newCanvas" height="' + originalDimensions.height + '" width="' + originalDimensions.width +'" style="width: 540px; height: 420px; position: absolute; left: 0; z-index: 2; pointer-events: none;"></canvas>'
	document.querySelector(canvas_name).insertAdjacentHTML("afterend", newCanvas);
	newCanvas = document.getElementById('newCanvas');
	newCTX = newCanvas.getContext("2d");

	if (!sizes[originalDimensions.height]) {
		console.error("Unrecognized board size");
		return;
	}
	if (!sizes[originalDimensions.height] === originalDimensions.width) {
		console.error("Unrecognized board size");
		return;
	}

	let boardHeight = originalDimensions.height;
	let boardWidth = originalDimensions.width;
	let squareSize = sizes[originalDimensions.height]["square"];

	let x = 0;
	let y = 0;
	let squareX = 0;
	let squareY = 0;
	document.addEventListener('mousemove', function (e) {
		x = e.pageX - originalPos.x;
		y = e.pageY - originalPos.y;
		if ((x >= 0 && x < boardWidth) && (y >= 0 && y < boardHeight)) {
			//console.log(`x: ${x}, y: ${y}`);
			if ((Math.floor(x/squareSize) != squareX) || (Math.floor(y/squareSize) != squareY)) {
				squareX = Math.floor(x/squareSize);
				squareY = Math.floor(y/squareSize);
				newCTX.clearRect(0, 0, boardWidth, boardHeight);
				newCTX.fillStyle = "rgb(255,0, 0)";				
				newCTX.fillRect(squareX*squareSize, squareY*squareSize, squareSize, squareSize);
				var data = originalCTX.getImageData(squareX*squareSize + squareSize/2, squareY*squareSize + squareSize/2, 1, 1).data;
				console.log(`%crgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`, `color: rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255});`);
			}
		}
	});
}

//findPos function from 
//https://stackoverflow.com/questions/6735470/get-pixel-color-from-canvas-on-mousemove
function findPos(obj) {
	var curleft = 0, curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
		return { x: curleft, y: curtop };
	}
	return undefined;
}

//Because you can't force move cursor, instead of trying to click the place, highlight where they should click. Scan square values by number color.
console.log("Hello!");
window.addEventListener('load', doSomething);
var s = document.createElement('script');
s.src = chrome.runtime.getURL('other.js');
document.documentElement.appendChild(s);
