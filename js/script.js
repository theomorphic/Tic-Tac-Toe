
const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

area.addEventListener('click', e=>{
    if(e.target.className = 'box') {
        console.log(e.target);
	let mark;
	mark = move % 2 == 0 ? "X" : "O";
	if (!e.target.innerHTML) {
		e.target.innerHTML = mark;
		move++;
	}
	if (move == 9) {
            prepareResult(0);
	}
        check();
    }
});

const check = () => {
	let boxes = [9]
	for (i = 0; i < 9; i++) {
		boxes[i] = document.getElementById('box' + i);
	}
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
