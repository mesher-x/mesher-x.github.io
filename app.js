window.onload = init;
var id = 0;

function init() {
	$('#root').append('<ul id="newList"></ul>');
	Add();
	$('#root').append('<input id="add_task_input"/>');
	$('#root').append('<button type="button" id="add_task" onclick="Add()"/>Добавить</button>');
}

function removeDummy(_id) {
    document.getElementById(_id).parentNode.removeChild(document.getElementById(_id));
}

function Add() {
	var text = '';
	if (id > 0) {
		text = document.getElementById("add_task_input").value;
	} else {
		text = 'Сделать задание #3 по web-программированию';
	}
    $('#newList').append('<li id="' + id.toString() + '"></li>');
    $('#' + id).append("<span>" + text + "</span>");
	$('#' + id).append('<button type="button" onclick="removeDummy(' + id.toString() + ')">Удалить</button>');
    id += 1;
}
// добавляет в div с id=root список ul,
// добавляет в этот список элемент li,
// добавляет в элемент li тэг span с текстом “Сделать задание #3 по web-программированию”,
// добавляет в элемент li кнопку button с текстом “Удалить”, 
// при нажатии на которую весь элемент li должен быть удален из DOM-дерева,
// добавляет в div с id=root input с id=add_task_input и кнопку button с id=add_task
// При нажатии на кнопку с id=add_task добавляется новый элемент li с текстом из input, 
// с требованиями как для “Сделать задание #3 по web-программированию”