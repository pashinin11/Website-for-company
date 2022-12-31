let who = 3
let time = 0
let men = 6
let opciitopki = [
	{
		name: 'gnom',
		text: 'на доз с пледиком+шишки с поцелуями+поход по музеям'
	},
	{
		name: 'goose',
		text: 'топок гуся нет'
	},
	{
		name: 'rasl',
		text: 'жестко кричать: лавка ебаная к параше, пупс ты наш рждшный иди в поле колбасу собирай'
	},
	{
		name: 'cts',
		text: 'откуда ты знаешь про дадова?+ты сейчас шаву ешь?(при условии поедания шавы)+напомнить про чела в мусорке у ЦДТ'
	},
	{
		name: 'ant',
		text: 'ты сейчас ссышь?(при условии если собака рядом)+сколько банок жиж?+нахуя ездил за 100 дней до экза?'
	},
	{
		name: 'bagr',
		text: 'ббв+как выбраться с коменды?+бритье'
	},
	{
		name: 'fash',
		text: 'когда бухал ласт раз? сколько дней в отрезвителе?'
	}
]
function chooseWho(v) {
	let arr = Object.keys(opciitopki)
	for (let i = 0; i < arr.length; i += 1) {
		if (v === opciitopki[i].name) {
			who = i
			for (let i = 0; i < arr.length; i += 1) {
				let n = opciitopki[i].name
				document.getElementById(n).classList.remove(`${n}_checked`)
				document.getElementById(n).classList.add(`inactive`)
			}

			document.getElementById(v).classList.add(`${v}_checked`)
			document.getElementById(v).classList.remove(`inactive`)
		}
	}

	update()
}
slidewho.oninput = showslidervalue;
function showslidervalue() {
	result.innerText = this.value;
}



function checkIfChecked() {
	let checkmarks = document.getElementsByClassName('checkmark');
	let lists = document.getElementsByClassName('list');

	for (let i = 0; i < checkmarks.length; i += 1) {
		checkmarks[i].classList.add('inactive')
	}

	for (let i = 0; i < lists.length; i += 1) {
		lists[i].classList.add('inactive')
	}

	if (document.getElementById('short').checked) {
		checkmarks[0].classList.remove('inactive')
		lists[0].classList.remove('inactive')
		time = 0
	}
	if (document.getElementById('mid').checked) {
		checkmarks[1].classList.remove('inactive')
		lists[1].classList.remove('inactive')
		time = 100
	}
	if (document.getElementById('long').checked) {
		checkmarks[2].classList.remove('inactive')
		lists[2].classList.remove('inactive')
		time = 200
	}

	update()
}

function update() {
	let text = document.getElementById('over')
	let text1 = (men * (opciitopki[who] + time))
	text.innerHTML = `${opciitopki[who].text}`
}

