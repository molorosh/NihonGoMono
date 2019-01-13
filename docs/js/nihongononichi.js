var NihonGoNoNichi = (function () {
    // private static
    var nextId = 1;
	
	var month_name = ['!','いち','に','さん','し','ご','ろく','しち','はち','くがつ','じゅう','じゅういち','じゅうに'];
	// 0 = sunday
	var weekday_kanji = ['日','月','火','水','木','金','土'];
	var weekday_name = ['にち','げつ','か','すい','もく','きん','ど'];
	
	var date_unique = [1,2,20];
	var date_separate_ka = [3,4,5,6,7,8,9,10,14,24];
	var date_nichi = [11,12,13,15,16,17,18,19,21,22,23,25,26,27,28,29,30,31];
	var date_name = [
						'!'
						,'ついたち','ふつか','みっ','よっ','いつ','むい','なの','よう','ここの'
						,'とお','じゅういち','じゅうに','じゅうさん','じゅうよっ','じゅうご','じゅうろく','じゅうしち','じゅうはち','じゅうく'
						,'はつか','にじゅういち','にじゅうに','にじゅうさん','にじゅうよっ','にじゅうご','にじゅうろく','にじゅうしち','にじゅうはち','にじゅうく'
						,'さんじゅう','さんじゅういち'
					];
	
    // constructor
    var cls = function () {
        // private
        var id = nextId++;
        var name = 'Unknown';
		
        // public (this instance only)
        this.get_id = function () { return id; };

        this.get_name = function () { return name; };
        this.set_name = function (value) {
            if (typeof value != 'string')
                throw 'Name must be a string';
            if (value.length < 2 || value.length > 20)
                throw 'Name must be 2-20 characters long.';
            name = value;
        };
		
    };

    // public static
    cls.get_nextId = function () {
        return nextId;
    };
	
	// public static method returns JSON 
	cls.createDateJSON = function (the_date) {
		let obj = {};
		obj.date = the_date;
		if(the_date == null){
			obj.debugStr = "(*** NULL ***)";
			obj.isValid = false;
		}else{
			obj.debugStr = "(*** " + the_date.toString() + " ***)";
			obj.isValid = true;
			obj.year = the_date.getFullYear();
			obj.month = the_date.getMonth() + 1;
			obj.date = the_date.getDate();
			obj.weekday = the_date.getDay(); // 0 is sunday
			obj.date_mode = "nichi";
			for(var x = 0, xMax = date_unique.length; x < xMax; x++){
				if(obj.date == date_unique[x]){
					obj.date_mode = "unique";
					break;
				}
			}
			if(obj.date_mode == "nichi")
			{
				for(var x = 0, xMax = date_separate_ka.length; x < xMax; x++){
					if(obj.date == date_separate_ka[x]){
						obj.date_mode = "ka";
						break;
					}
				}
			}
			// year
			obj.formattedHtml = "<span class='spYear'>" + obj.year + "<ruby>年<rp>(</rp><rt>ねん</rt><rp>)</rp></ruby></span>";
			// month
			obj.formattedHtml += "<span class='spPreMonthSpacer'>&nbsp;</span>";
			if(obj.month == 9){
				obj.formattedHtml += "<span class='spMonth'><ruby>" + obj.month + "月<rp>(</rp><rt>くがつ</rt><rp>)</rp></ruby></span>";
			}else{
				obj.formattedHtml += "<span class='spMonth'><ruby>" + obj.month + "<rp>(</rp><rt>" + month_name[obj.month] + "</rt><rp>)</rp>月<rp>(</rp><rt>がつ</rt><rp>)</rp></ruby></span>";
			}
			// date
			obj.formattedHtml += "<span class='spPreDateSpacer'>&nbsp;</span>";
			if(obj.date_mode == "unique"){
				obj.formattedHtml += "<span class='spDate'><ruby>" + obj.date + "日<rp>(</rp><rt>" + date_name[obj.date] + "</rt><rp>)</rp></ruby></span>";
			}else if(obj.date_mode == "ka"){
				obj.formattedHtml += "<span class='spDate'><ruby>" + obj.date + "<rp>(</rp><rt>" + date_name[obj.date] + "</rt><rp>)</rp>日<rp>(</rp><rt>か</rt><rp>)</rp></ruby></span>";
			}else{
				obj.formattedHtml += "<span class='spDate'><ruby>" + obj.date + "<rp>(</rp><rt>" + date_name[obj.date] + "</rt><rp>)</rp>日<rp>(</rp><rt>にち</rt><rp>)</rp></ruby></span>";
			}
			// day
			obj.formattedHtml += "<span class='spPreWeekdaySpacer'>&nbsp;</span>";
			obj.formattedHtml += "<span class='spWeekday'><ruby>" + weekday_kanji[obj.weekday] + "<rp>(</rp><rt>" + weekday_name[obj.weekday] + "</rt><rp>)</rp>曜<rp>(</rp><rt>よう</rt><rp>)</rp>日<rp>(</rp><rt>び</rt><rp>)</rp></ruby></span>";
		}
		return obj;
	};

    // public (shared across instances)
    cls.prototype = {
        announce: function () {
            alert('Hi there! My id is ' + this.get_id() + ' and my name is "' + this.get_name() + '"!\r\n' +
                  'The next fellow\'s id will be ' + MyClass.get_nextId() + '!');
        }
    };

    return cls;
})();