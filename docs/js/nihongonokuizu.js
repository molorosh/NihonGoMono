function kuizuSelectSetup(){
	//console.log("kuizuSelectSetup()");
	for(var x = 0, xMax = kuizo_titles.length; x < xMax; x++){
		$('#id_select_quizTheme').append( $('<option>', { value: kuizo_titles[x].val, text: (kuizo_titles[x].category + " level " + ("00" + kuizo_titles[x].level).slice(-2) ) }) );
	}
	var screen_height = $(window).height();
	var content_div_ver_pos = $("#id_div_quizContent")
	var pos = content_div_ver_pos.position();
	var pos_top = pos.top;
	var new_height = screen_height - (pos_top + 25);
	//console.log("screen_height = " + screen_height);
	//console.log("pos_top = " + pos_top);
	//console.log("new_height = " + new_height);
	content_div_ver_pos.height(new_height);
}

function getIndexArray(size){
	var arr = [];
	for(x = 0; x < size; x++){
		arr.push(x);
	}
	return arr;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


function kuizuSelect(){
	var selectedVal = $("#id_select_quizTheme option:selected").val();
	var selectedText = $("#id_select_quizTheme option:selected").text();
	//console.log(selectedVal + "::" + selectedText);
	// fetch the data
	var data = null;
	for(var x = 0, xMax = kuizo_data.length; x < xMax; x++){
		if(kuizo_data[x].key === selectedVal){
			data = kuizo_data[x];
			break;
		}
	}
	if(data !== null){
		var main_div = $("#id_div_quizContent");
		main_div.empty();
		// add the "undo" cell_content
		var undo = $("<div id='undo_cell' ondrop='kuizu_drop_undo(event)' ondragover='kuizu_allowDrop(event)' class='type_undo'></div>");
		var undo_cell_title = $("<div class='undo_cell_content'></div>");
		undo_cell_title.append("UNDO");
		var undo_cell_content = $("<div class='undo_cell_content'></div>");
		undo.append(undo_cell_title);
		main_div.append(undo);
		// now add the content randomly (but answer cells first)
		var randomAnswerIndexes = shuffle(getIndexArray(data.answers.length));
		//console.log(randomAnswerIndexes);
		var randomPhrasesIndexes = shuffle(getIndexArray(data.phrases.length));
		//console.log(randomPhrasesIndexes);
		// answers
		for(var x = 0, xMax = data.answers.length; x < xMax; x++){
			var spn = $("<div id='a_" + randomAnswerIndexes[x] + "' ondrop='kuizu_drop(event)' ondragover='kuizu_allowDrop(event)' class='type_" + data.answers[randomAnswerIndexes[x]].type + "'></div>");
			var cell_title = $("<div class='cell_title'></div>");
			cell_title.append(data.answers[randomAnswerIndexes[x]].text);
			var cell_content = $("<div id='cell_content_a" + randomAnswerIndexes[x] + "' class='cell_content'></div>");
			spn.append(cell_title);
			spn.append(cell_content);
			main_div.append(spn);	
		}
		// a clean divide
		main_div.append($("<hr class='kuizu_hr'>"));
		// phrases
		for(var x = 0, xMax = data.phrases.length; x < xMax; x++){
			var spn = $("<div id='p_" + randomPhrasesIndexes[x] + "' draggable='true' ondragstart='kuizu_drag(event)' class='type_" + data.phrases[randomPhrasesIndexes[x]].type + "'></div>");
			spn.append(data.phrases[randomPhrasesIndexes[x]].text);
			main_div.append(spn);	
		}
	}
	
}

// q.v.: https://www.w3schools.com/html/html5_draganddrop.asp

function kuizu_drag(ev){
	//console.log('kuizu_drop(ev)');
	//console.log(ev);
	ev.dataTransfer.setData("text", ev.target.id);
}

function kuizu_drop(ev){
	console.log('kuizu_drop(ev)');
	console.log(ev.target);
	ev.preventDefault();
    var id_of_dragged_element = ev.dataTransfer.getData("text");
	var id_of_target_element = ev.target.id;
	var cell_content_div = $("#cell_content_" + id_of_dragged_element);
    //cell_content_div.append(document.getElementById(id_of_dragged_element));
	ev.target.appendChild(document.getElementById(id_of_dragged_element));
	kuizu_debug("drop dragged_id=" + id_of_dragged_element + ", target_id=" + id_of_target_element);
}


// with dragging to UNDO then we just append the 
// dragged element to the end of the quizContent container
function kuizu_drop_undo(ev){
	//console.log('kuizu_drop_undo(ev)');
	//console.log(ev);
	ev.preventDefault();
    var id_of_dragged_element = ev.dataTransfer.getData("text");
	var id_of_target_element = ev.target.id;
	kuizu_debug("UNDO drop dragged_id=" + id_of_dragged_element + ", target_id=" + id_of_target_element);
	//ev.target.appendChild(document.getElementById(id_of_dragged_element));
	$("#id_div_quizContent").append(document.getElementById(id_of_dragged_element));
}

function kuizu_debug(msg){
	var ts = new Date();
	var ts_str = ts.toString();
	// just get the "HH:mm:ss" from the date.toString()
	var time_str = ts_str.slice(16,24);
	var p_msg = "@" + time_str + " ~ " + msg;
	$("#id_p_debug").text(p_msg);
}

function kuizu_allowDrop(ev){
	//console.log('kuizu_allowDrop(ev)');
	//console.log(ev);
	event.preventDefault()
}
