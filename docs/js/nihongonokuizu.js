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
		var randomAnswerIndexes = shuffle(getIndexArray(data.answers.length));
		//console.log(randomAnswerIndexes);
		var randomPhrasesIndexes = shuffle(getIndexArray(data.phrases.length));
		//console.log(randomPhrasesIndexes);
		// answers
		for(var x = 0, xMax = data.answers.length; x < xMax; x++){
			var spn = $("<span id='a_" + randomAnswerIndexes[x] + "' ondrop='kuizu_drop(event)' ondragover='kuizu_allowDrop(event)' class='type_" + data.answers[randomAnswerIndexes[x]].type + "'></span>");
			spn.append(data.answers[randomAnswerIndexes[x]].text);
			main_div.append(spn);	
		}
		// phrases
		for(var x = 0, xMax = data.phrases.length; x < xMax; x++){
			var spn = $("<span id='p_" + randomPhrasesIndexes[x] + "' draggable='true' ondragstart='kuizu_drag(event)' class='type_" + data.phrases[randomPhrasesIndexes[x]].type + "'></span>");
			spn.append(data.phrases[randomPhrasesIndexes[x]].text);
			main_div.append(spn);	
		}
	}
	
}

// q.v.: https://www.w3schools.com/html/html5_draganddrop.asp

function kuizu_drag(evnt){
	console.log('kuizu_drop(evnt){');
	console.log(evnt);
	ev.dataTransfer.setData("text", ev.target.id);
}

function kuizu_drop(evnt){
	console.log('kuizu_drop(evnt){');
	console.log(evnt);
}

function kuizu_allowDrop(evnt){
	console.log('kuizu_allowDrop(evnt){');
	console.log(evnt);
	event.preventDefault()
}

