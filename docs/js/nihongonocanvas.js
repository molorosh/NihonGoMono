// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/

function nihongomono_canvas_setup(){
	console.log("nihongomono_canvas_setup");
	var canvas = document.getElementById('id_canvas');
	// get a reference to the CanvasRenderingContext2D object:
	var ctx = canvas.getContext('2d');
	
	// very simple example
	ctx.fillStyle = 'rgb(200, 0, 0)';
	ctx.fillRect(10, 10, 50, 50);

	ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
	ctx.fillRect(30, 30, 50, 50);
}

function nihongomono_canvas_resize(){
	//console.log("nihongomono_canvas_resize");
}
