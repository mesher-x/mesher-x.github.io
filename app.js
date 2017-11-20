var ul = document.createElement('ul');
$('#root').append("<ul id='newList'></ul>");
$("#newList").append("<li id='listItem'></li>");
$("#listItem").append("<span>Сделать задание #3 по web-программированию</span>")
$("#listItem").append("<button onclick='removeDummy()'>Удалить</button>")
function removeDummy() {
    var elem = document.getElementById('listItem');
    elem.parentNode.removeChild(elem);
    return false;
}
$('#root').append("<input id=add_task_input/>");
$('#root').append("<button id=add_task onclick='Add()'/>Добавить</button>");
function Add() {
    $("#newList").append("<li>" + document.getElementById('add_task_input').value + "</li>");
}
// добавляет в div с id=root список ul,
// добавляет в этот список элемент li,
// добавляет в элемент li тэг span с текстом “Сделать задание #3 по web-программированию”,
// добавляет в элемент li кнопку button с текстом “Удалить”, 
// при нажатии на которую весь элемент li должен быть удален из DOM-дерева,
// добавляет в div с id=root input с id=add_task_input и кнопку button с id=add_task
// При нажатии на кнопку с id=add_task добавляется новый элемент li с текстом из input, 
// с требованиями как для “Сделать задание #3 по web-программированию”