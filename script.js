let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    // create new p element
    var paragraph = document.createElement('p');
    // to add some stylinh
    paragraph.classList.add('paragraph-styling');
    // assign value of todo to p element
    paragraph.innerText = inputField.value;
    // append child inside todo container
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
})