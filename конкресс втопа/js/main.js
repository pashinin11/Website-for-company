let who = 3
let range_1 = document.getElementById('slidewho')
let range_2 = document.getElementById('range_power')
let textVtopa = document.getElementById('result_top');
let time = 0
let men = 6
let opciitopki = [
	{
		name: 'gnom',
		text: 'на доз с пледиком'
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
		text: 'ты сейчас шаву ешь?(при условии поедания шавы)'
	},
	{
		name: 'ant',
		text: 'ты сейчас ссышь?(при условии если собака рядом)'
	},
	{
		name: 'bagr',
		text: 'как выбраться с коменды?'
	},
	{
		name: 'fash',
		text: 'когда бухал ласт раз?'
	}
]
let opciitopki2 = [
	{
		name: 'gnom',
		text: 'шишки в лесу'
	},
	{
		name: 'goose',
		text: 'топок гуся нет'
	},
	{
		name: 'rasl',
		text: 'рассказ родителям про наркоту'
	},
	{
		name: 'cts',
		text: 'откуда инфа про дадова'
	},
	{
		name: 'ant',
		text: 'сколько банок жиж'
	},
	{
		name: 'bagr',
		text: 'ббв'
	},
	{
		name: 'fash',
		text: 'сколько дней в отрезвителе'
	}
]
let opciitopki3 = [
	{
		name: 'gnom',
		text: 'упомянуть походы в музей+ласт джагу'
	},
	{
		name: 'goose',
		text: 'топок гуся нет'
	},
	{
		name: 'rasl',
		text: 'кошмарить Диану'
	},
	{
		name: 'cts',
		text: 'упомянуть про чела у мусорки цдт'
	},
	{
		name: 'ant',
		text: 'нахуй поехал за 100 дней до экза в пиктер'
	},
	{
		name: 'bagr',
		text: 'брил жопу?'
	},
	{
		name: 'fash',
		text: 'Зачем кристиночке нес учебники в СОШ номер 1?'
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
function fun1() {
	if (range_2.value == 1) {
		textVtopa.textContent = 'Немного притопить';
		power = 0;
	}

	if (range_2.value == 2) {
		textVtopa.textContent = 'ГМТ';
		power = 100;
	}

	if (range_2.value == 3) {
		textVtopa.textContent = 'Топить пока не ливнет';
		power = 200;
	}

	update()
};

function update() {
	let text = document.getElementById('over')
	let text1 = (men * (opciitopki[who] + time))
	let text2 = (men * (opciitopki2[who] + time))
	let text3 = (men * (opciitopki3[who] + time))
	if (power == 0) {
		text.innerHTML = `${opciitopki[who].text}`
	}
	if (power == 100) {
		text.innerHTML = `${opciitopki2[who].text}`
	}
	if (power == 200) {
		text.innerHTML = `${opciitopki3[who].text}`
	}

}

