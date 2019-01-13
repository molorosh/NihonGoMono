
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
	let para = document.getElementById("id_p_date");
	para.innerHTML = the_date.formattedHtml;
}