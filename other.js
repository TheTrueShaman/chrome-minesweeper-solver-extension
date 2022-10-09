//Makes defining ctx turn willreadfrequently to true by default so no error occurs.
console.log("executed");

HTMLCanvasElement.prototype.getContext = function (orig) {
	return function(type) {
		console.log("Hello");
		arguments[1] = {willReadFrequently:true};
		arguments.length = 2;
		console.log(arguments);
		if (orig) return orig.apply(this, arguments);
		else return null;
	}
}(HTMLCanvasElement.prototype.getContext)
