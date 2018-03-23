const deleteFunction = require("./delete");
const progressBarFunction = require("./progress-bar");
const tagFunction = require("./tags");


const app = {
    init() {
        $('#todo-form').submit(app.addTodo);
    },
    addTodo(event) {
        event.preventDefault();
        const { value: todo } = document.getElementById('todo');

        let todoId = `todo-${app.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m6 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);
        const $todoBntDelete = $('<button type="button"/>').addClass("btn right").text('x').click(deleteFunction);
        const $todoBntTag = $('<a/>').addClass("dropdown-trigger btn right").text('Etiqueta').click(tagFunction);

        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoCard.append($todoBntDelete);
        $todoContainer.append($todoCard);
        $todoCard.append($todoBntTag);

        $('#todos').append($todoContainer);

        app.counter = app.counter + 1;
    },
    counter: 0
};

$(document).ready(app.init);
