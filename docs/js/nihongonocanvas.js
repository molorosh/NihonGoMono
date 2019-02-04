// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/

function nihongomono_canvas_setup(){
	//console.log("nihongomono_canvas_setup");
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

function nihongomono_konva_setup(){
	//console.log("nihongomono_konva_setup");
	
	var screen_height = $(window).height();
	var content_div_ver_pos = $("#id_div_konva")
	var pos = content_div_ver_pos.position();
	var pos_top = pos.top;
	var new_height = screen_height - (pos_top + 25);
	
	var width = $(window).width();
    var height = new_height;

	var stage = new Konva.Stage({
            container: 'id_div_konva',
            width: width,
            height: height
        });

	var layer = new Konva.Layer();
	stage.add(layer);
	
	for (var i = 0; i < 10; i++) {
            layer.add(createShape());
        }
    layer.draw();
	
	function createShape() {
            var group = new Konva.Group({
                x: Math.random() * width,
                y: Math.random() * height,
                draggable: true
            });
            var shape = new Konva.Rect({
                width: 30 + Math.random() * 30,
                height: 30 + Math.random() * 30,
                fill: 'green',
                rotation: 360 * Math.random(),
                name: 'fillShape'
            });
            group.add(shape);

            var boundingBox = shape.getClientRect({ relativeTo: group });

            var box = new Konva.Rect({
                x: boundingBox.x,
                y: boundingBox.y,
                width: boundingBox.width,
                height: boundingBox.height,
                stroke: 'red',
                strokeWidth: 1
            });
            group.add(box);
            return group;
        }
	
	function haveIntersection(r1, r2) {
            return !(
                r2.x > r1.x + r1.width ||
                r2.x + r2.width < r1.x ||
                r2.y > r1.y + r1.height ||
                r2.y + r2.height < r1.y
            );
        }

	layer.on('dragmove', function (e) {
		var target = e.target;
		var targetRect = e.target.getClientRect();
		layer.children.each(function (group) {
			// do not check intersection with itself
			if (group === target) {
				return;
			}
			if (haveIntersection(group.getClientRect(), targetRect)) {
				group.findOne('.fillShape').fill('red');
			} else {
				group.findOne('.fillShape').fill('green');
			}
			// do not need to call layer.draw() here
			// because it will be called by dragmove action
		});
	})

	
}

function nihongomono_konva_resize(){
	//console.log("nihongomono_canvas_resize");
	nihongomono_konva_setup();
}



