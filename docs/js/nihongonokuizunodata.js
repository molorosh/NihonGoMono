var kuizo_titles = [
	{ val: 'colors_lvl_001', category: 'Colours', level: 1 },
	{ val: 'calendar_lvl_001', category: 'Calendar', level: 1 },
	{ val: 'calendar_lvl_002', category: 'Calendar', level: 2 },
	{ val: 'calendar_lvl_003', category: 'Calendar', level: 3 },
];

var kuizo_data = [
	{ 
		key: 'colors_lvl_001',
		answers: [
			{ text: 'White', type: 'answer' },
			{ text: 'Red' , type: 'answer' },
			{ text: 'Blue' , type: 'answer' },
			{ text: 'Black' , type: 'answer' },
			{ text: 'Colour' , type: 'answer' }
		],
		phrases: [
			{ text: 'いろ', answers: ['Colour'], type: 'hiragana' },
			{ text: '色', answers: ['Colour'], type: 'kanji' },
			
			{ text: 'しろ', answers: ['White'], type: 'hiragana' },
			{ text: '白', answers: ['White'], type: 'kanji' },
			
			{ text: 'あか', answers: ['Red'], type: 'hiragana' },
			{ text: '赤', answers: ['Red'], type: 'kanji' },
			
			{ text: 'くろ', answers: ['Black'], type: 'hiragana' },
			{ text: '黒', answers: ['Black'], type: 'kanji' },
			
			{ text: 'あお', answers: ['Blue'], type: 'hiragana' },
			{ text: '青', answers: ['Blue'], type: 'kanji' }
		]
	},
	{ 
		key: 'calendar_lvl_001',
		answers: [
			{ text: 'Weekday' , type: 'answer' },
			{ text: 'Month' , type: 'answer' },
			{ text: 'Day' , type: 'answer' },
			{ text: 'Year' , type: 'answer' }
		],
		phrases: [
			{ text: 'ようび', answers: ['Weekday'], type: 'hiragana' },
			{ text: '曜日', answers: ['Weekday'], type: 'kanji' },
			
			{ text: 'がつ', answers: ['Month'], type: 'hiragana' },
			{ text: '月', answers: ['Month'], type: 'kanji' },
			
			{ text: 'ひ', answers: ['Day'], type: 'hiragana' },
			{ text: 'にち', answers: ['Day'], type: 'hiragana' },
			{ text: '日', answers: ['Day'], type: 'kanji' },
			
			{ text: 'とし', answers: ['Year'], type: 'hiragana' },
			{ text: 'ねん', answers: ['Year'], type: 'hiragana' },
			{ text: '年', answers: ['Year'], type: 'kanji' }
		]
	},
	{ 
		key: 'calendar_lvl_002',
		answers: [
			{ text: 'Monday' , type: 'answer' },
			{ text: 'Tuesday' , type: 'answer' },
			{ text: 'Wednesday' , type: 'answer' },
			{ text: 'Thursday' , type: 'answer' },
			{ text: 'Friday' , type: 'answer' },
			{ text: 'Saturday' , type: 'answer' },
			{ text: 'Sunday' , type: 'answer' },
		],
		phrases: [
			{ text: 'げつようび', answers: ['Monday'], type: 'hiragana' },
			{ text: '月曜日', answers: ['Monday'], type: 'kanji' },
			
			{ text: 'かようび', answers: ['Tuesday'], type: 'hiragana' },
			{ text: '火曜日', answers: ['Tuesday'], type: 'kanji' },
			
			{ text: 'すいようび', answers: ['Wednesday'], type: 'hiragana' },
			{ text: '水曜日', answers: ['Wednesday'], type: 'hiragana' },
			
			{ text: 'もくようび', answers: ['Thursday'], type: 'hiragana' },
			{ text: '木曜日', answers: ['Thursday'], type: 'hiragana' },

			{ text: 'きんようび', answers: ['Friday'], type: 'hiragana' },
			{ text: '金曜日', answers: ['Friday'], type: 'hiragana' },

			{ text: 'どようび', answers: ['Saturday'], type: 'hiragana' },
			{ text: '土曜日', answers: ['Saturday'], type: 'hiragana' },

			{ text: 'にちようび', answers: ['Sunday'], type: 'hiragana' },
			{ text: '日曜日', answers: ['Sunday'], type: 'hiragana' },
		]
	},
	{ 
		key: 'calendar_lvl_003',
		answers: [
			{ text: '1日' , type: 'answer' },
			{ text: '2日' , type: 'answer' },
			{ text: '3日' , type: 'answer' },
			{ text: '4日' , type: 'answer' },
			{ text: '5日' , type: 'answer' },
			{ text: '6日' , type: 'answer' },
			{ text: '7日' , type: 'answer' },
			{ text: '8日' , type: 'answer' },
			{ text: '9日' , type: 'answer' },
			{ text: '10日' , type: 'answer' },
			{ text: '14日' , type: 'answer' },
			{ text: '20日' , type: 'answer' },
			{ text: '24日' , type: 'answer' },
		],
		phrases: [
			{ text: 'ついたち', answers: ['1日'], type: 'hiragana' },
			{ text: 'ふつか', answers: ['2日'], type: 'hiragana' },
			{ text: 'みっか', answers: ['3日'], type: 'hiragana' },
			{ text: 'よっか', answers: ['4日'], type: 'hiragana' },
			{ text: 'いつか', answers: ['5日'], type: 'hiragana' },
			{ text: 'むいか', answers: ['6日'], type: 'hiragana' },
			{ text: 'なのか', answers: ['7日'], type: 'hiragana' },
			{ text: 'ようか', answers: ['8日'], type: 'hiragana' },
			{ text: 'ここのか', answers: ['9日'], type: 'hiragana' },
			{ text: 'とおか', answers: ['10日'], type: 'hiragana' },
			{ text: 'じゅうよっか', answers: ['14日'], type: 'hiragana' },
			{ text: 'はつか', answers: ['20日'], type: 'hiragana' },
			{ text: 'にじゅうよっか', answers: ['24日'], type: 'hiragana' },
		]
	}
]
