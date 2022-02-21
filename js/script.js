const area = document.getElementById('area');
<<<<<<< HEAD
const button_change = document.getElementById('btn-change');

const MODE_2P = '2 Players';
const MODE_AI = 'AI';
const MODE_NINNY = 'Ninny';

const X_MARK = "X";
const O_MARK = "O";

let mark = X_MARK;
let mode = MODE_2P;
button_change.innerHTML = mode;

let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

<<<<<<< HEAD
function get_boxes()
{
	let boxes = [9];
	let i = 0;
	for (i = 0; i < 9; i++) {
		boxes[i] = document.getElementById('box' + i).innerHTML;
||||||| c1a6ead
area.addEventListener('click', e=>{
    if(e.target.className = 'box') {
        console.log(e.target);
	let mark;
	mark = move % 2 == 0 ? "X" : "O";
	if (!e.target.innerHTML) {
		e.target.innerHTML = mark;
		move++;
=======
function get_boxes()
{
	let boxes = [9];
	for (i = 0; i < 9; i++) {
		boxes[i] = document.getElementById('box' + i).innerHTML;
>>>>>>> upstream/main
	}
<<<<<<< HEAD
	return boxes;
}

function reload()
{
	mark = X_MARK;
	for (i = 0; i < 9; i++)
		document.getElementById('box' + i).innerHTML = '';
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
||||||| c1a6ead
	if (move == 9) {
            prepareResult(0);
=======
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
>>>>>>> upstream/main
	}
<<<<<<< HEAD
	e.target.innerHTML = mode;
	reload();
||||||| c1a6ead
        check();
    }
=======
>>>>>>> upstream/main
});

<<<<<<< HEAD
area.addEventListener('click', e=>{
	if (e.target.className = 'box') {
		if (e.target.innerHTML == "") {
			e.target.innerHTML = mark;
			if (check())
				if (mode != MODE_2P)
					ai();
		}
||||||| c1a6ead
const check = () => {
	let boxes = [9]
	for (i = 0; i < 9; i++) {
		boxes[i] = document.getElementById('box' + i);
=======
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
>>>>>>> upstream/main
	}
<<<<<<< HEAD
});

function get_empty(boxes)
{
	let empty = [];
	let i = 0;
	for (i in boxes)
		if (boxes[i] == "")
			empty.push(i);
	return empty;
}

function mark_reverse(mark)
{
	if (mark == X_MARK)
		return O_MARK;
	return X_MARK;
}

function get_cell_score(boxes, cell, mrk, winmrk)
{
	let score = 0;
	let next_boxes = boxes.slice();
	next_boxes[cell] = mrk;
	let next_mrk = mark_reverse(mrk);
	switch (check_win(next_boxes)) {
		case winmrk: return 1;
		case mark_reverse(winmrk): return -1;
		case 1: return 0;
	}
	let next_empty = get_empty(next_boxes);
	let i = 0;
	for (i in next_empty) {
		score += get_cell_score(next_boxes, next_empty[i], next_mrk, winmrk);
	}
	return score;
}

function ai()
{
	let choice;
	let boxes = get_boxes();
	let empty = get_empty(boxes);
	if (mode == MODE_AI) {
		let highest = -100000;
		let sc;
		let k = 0;
		for (k in empty) {
			sc = get_cell_score(boxes, empty[k], mark, O_MARK);
			if (sc > highest) {
				choice = empty[k];
				highest = sc;
			}
		}
	} else if (mode == MODE_NINNY) {
		choice = empty[Math.round(Math.random() * (empty.length - 1))];
	}
	target = document.getElementById('box' + choice);
	target.innerHTML = O_MARK;
	check();
}

function check_win(boxes)
{
	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]];
	let i = 0;
	for (i in lines) {
		if (boxes[lines[i][0]] == X_MARK &&
		    boxes[lines[i][1]] == X_MARK &&
		    boxes[lines[i][2]] == X_MARK) {
			return X_MARK;
		} else if (boxes[lines[i][0]] == O_MARK &&
			   boxes[lines[i][1]] == O_MARK &&
			   boxes[lines[i][2]] == O_MARK) {
			return O_MARK;
		}
	}
	if (get_empty(boxes).length == 0) {
		return 1;
	}
	return 0;
}

function check()
{
	mark = mark_reverse(mark);
	switch (check_win(get_boxes())) {
	case X_MARK:
		result = 'кресты';
		prepareResult(result);
		return 0;
		break;
	case O_MARK:
		result = 'нули';
		prepareResult(result);
		return 0;
	case 1:
		prepareResult(0);
		return 0;
	}
	return 1;
||||||| c1a6ead
    //const boxes = document.getElementsByClassName('box');
    console.log(boxes);
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
    for(i = 0; i < arr.length; i++) {
        if(
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'кресты';
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'
        ) {
            result = 'нули';
            prepareResult(result);
        }
    }
=======
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
>>>>>>> upstream/main
}
const prepareResult = winner => {
	let message = `Затащили ${winner}!`;
	if (winner == 0)
		message = 'Ничья!';
	contentWrapper.innerHTML = message;
	modalResult.style.display = 'block';
}

const closeModal = () => {
<<<<<<< HEAD
	modalResult.style.display = 'none';
	reload();
||||||| c1a6ead
    modalResult.style.display = 'none';
    location.reload();
=======
	modalResult.style.display = 'none';
	location.reload();
>>>>>>> upstream/main
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
