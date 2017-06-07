
function a() {
	var myVar = 2;
	b();
	function b() {
		console.log(myVar);
	}

}

var myVar = 1;
a();
//Where a function sits determines its outer environment reference
