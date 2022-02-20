const area = document.getElementById('area');
const button_change = document.getElementById('btn-change');

const MODE_2P = '2 Players';
const MODE_AI = 'AI';
const MODE_NINNY = 'Ninny';

const X_MARK = "X"
const O_MARK = "O"

let move = 0;
let mode = MODE_2P;
button_change.innerHTML = mode;

let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

function get_boxes()
{
	let boxes = [9];
	for (i = 0; i < 9; i++) {
		boxes[i] = document.getElementById('box' + i).innerHTML;
	}
	return boxes
}

button_change.addEventListener('click', e=>{
	switch (mode) {
	case MODE_2P:
		mode = MODE_AI;
		break;
	case MODE_AI:
		mode = MODE_NINNY;
		break;
	case MODE_NINNY:
		mode = MODE_2P;
		break;
	}
	e.target.innerHTML = mode;
	move = 0;
	for (i = 0; i < 9; i++) {
		document.getElementById('box' + i).innerHTML = '';
	}
});

area.addEventListener('click', e=>{
	if (e.target.className = 'box') {
		if (mode == MODE_2P) 
			mark = move % 2 == 0 ? X_MARK : O_MARK;
		else
			mark = X_MARK;
		if (e.target.innerHTML == "") {
			e.target.innerHTML = mark;
			if (check())
				ai();
		}
	}
});

function ai()
{
	let boxes = get_boxes();
	let empty = [];
	let choice;
	if (mode == MODE_AI) {
		;
	} else if (mode == MODE_NINNY) {
		for (i = 0; i < 9; i++) {
			if (boxes[i] == "")
				empty.push(i);
		}
		choice = empty[Math.round(Math.random() * (empty.length - 1))];
	}
	target = document.getElementById('box' + choice);
	target.innerHTML = O_MARK;
	check();
}

function check()
{
	move++;
	let boxes = get_boxes();
	const arr = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	];
	for (i = 0; i < arr.length; i++) {
		if (boxes[arr[i][0]] == X_MARK &&
		    boxes[arr[i][1]] == X_MARK &&
		    boxes[arr[i][2]] == X_MARK) {
			result = 'кресты';
			prepareResult(result);
			return 0
		} else if (boxes[arr[i][0]] == O_MARK &&
			   boxes[arr[i][1]] == O_MARK &&
			   boxes[arr[i][2]] == O_MARK) {
			result = 'нули';
			prepareResult(result);
			return 0
		}
	}
	if (move == 9) {
	    prepareResult(0);
	    return 0
	}
	return 1
}
const prepareResult = winner => {
	let message = `Затащили ${winner}!`;
	if (winner == 0)
		message = 'Ничья!';
	contentWrapper.innerHTML = message;
	modalResult.style.display = 'block';
}

const closeModal = () => {
	modalResult.style.display = 'none';
	location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
