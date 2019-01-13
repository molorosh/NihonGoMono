
function nannichi_showFurigana(the_html_element){
	console.log(the_html_element);
	the_html_element.classList.remove('hideFurigana');
	the_html_element.classList.add('showFurigana');
}

function nannichi_show_english(){
	let span_english = document.getElementById("id_span_date_english");
	console.log(span_english);
	span_english.style.visibility = 'visible';
}

function nannichi_getDate(code){
	let the_date = new Date();
	let days = 0;
	switch(code){
		case "random":
			days = 2345.56 * (0.5 - Math.random());
			break;
		case "yesterday":
			days = -1;
			break;
		case "tomorrow":
			days = 1;
			break;
	}
	the_date.setDate(the_date.getDate() + days);
	let date_obj = NihonGoNoNichi.createDateJSON(the_date);
	return date_obj;
}

function nannichi(code){
	let the_date = nannichi_getDate(code);
	console.log(the_date);
	// 
	let para = document.getElementById("id_p_date");
	para.innerHTML = the_date.formattedHtml;
	// 
	let english_html = "<button class='nannichi_button' onclick='nannichi_show_english();'><ruby>英<rp>(</rp><rt>えい</rt><rp>)</rp></ruby></button>";
	english_html += " <span id='id_span_date_english'>";
	english_html += the_date.englishStr;
	english_html += "</span>";
	let para_english = document.getElementById("id_p_date_english");
	para_english.innerHTML = english_html;
}