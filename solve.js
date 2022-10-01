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
	
	//newCanvas is for drawing on
	let newCanvas = '<canvas id="newCanvas" width="540" height="420" style="width: 540px; height: 420px; position: absolute; left: 0; z-index: 2; pointer-events: none;"></canvas>'
	document.querySelector(canvas_name).insertAdjacentHTML("afterend", newCanvas);
	newCanvas = document.getElementById('newCanvas');
	newCTX = newCanvas.getContext("2d");

	var x = 0;
	var y = 0;
	document.addEventListener('mousemove', function (e) {
		x = e.pageX - originalPos.x;
		y = e.pageY - originalPos.y;
		if ((x >= 0 && x < 540) && (y >= 0 && y < 420)) {
			console.log(`x: ${x}, y: ${y}`);
			newCTX.fillStyle = "rgb(255,0, 0)";
			newCTX.fillRect(Math.floor(x/30)*30, Math.floor(y/30)*30, 30, 30);
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

//Instead of trying to click the place, highlight where they should click. Scan square values by number color.

doSomething();
