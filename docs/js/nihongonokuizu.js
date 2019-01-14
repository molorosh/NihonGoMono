function kuizuSelectSetup(){
	console.log("kuizuSelectSetup()");
	for(var x = 0, xMax = kuizo_titles.length; x < xMax; x++){
		$('#id_select_quizTheme').append( $('<option>', { value: kuizo_titles[x].val, text: (kuizo_titles[x].category + " level " + ("00" + kuizo_titles[x].level).slice(-2) ) }) );
	}
	var screen_height = $(window).height();
	var content_div_ver_pos = $("#id_div_quizContent")
	var pos = content_div_ver_pos.position();
	var pos_top = pos.top;
	var new_height = screen_height - (pos_top + 25);
	console.log("screen_height = " + screen_height);
	console.log("pos_top = " + pos_top);
	console.log("new_height = " + new_height);
	content_div_ver_pos.height(new_height);
}

function kuizuSelect(){
	var selectedVal = $("#id_select_quizTheme option:selected").val();
	var selectedText = $("#id_select_quizTheme option:selected").text();
	alert(selectedVal + "::" + selectedText);
}