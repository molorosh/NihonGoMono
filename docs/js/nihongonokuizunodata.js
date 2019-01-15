var kuizo_titles = [
	{ val: 'colors_lvl_001', category: 'Colours', level: 1 },
	{ val: 'calendar_lvl_001', category: 'Calendar', level: 1 }
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
			
			{ text: 'あお', answers: ['Colour'], type: 'hiragana' },
			{ text: '青', answers: ['Colour'], type: 'kanji' }
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
	}
]
