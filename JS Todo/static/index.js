// variables for elements in html
var inp = document.querySelector('.inp');
var btn = document.querySelector('.bt_inp');
var list = document.querySelector('.my_list');

// event listeners
btn.addEventListener('click', addTodo);
list.addEventListener('click', deleteIt);

// functions
function addTodo(event) {
    event.preventDefault();
    var newDiv = document.createElement('div');
    newDiv.classList.add('div_todo')
    var text = inp.value;
    var tn = document.createTextNode(text);
    var li = document.createElement('li');
    li.setAttribute('class', 'li_item');
    li.innerText = text;
    var cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'X';
    cancelBtn.setAttribute('class', 'cancel_btn btn btn-danger');
    newDiv.appendChild(li);
    newDiv.appendChild(cancelBtn);
    document.getElementById('my_list').appendChild(newDiv);
    inp.value = "";
}

function deleteIt(element) {
    // console.log(element.target.classList[0]);
    var item = element.target;
    if (item.classList[0] === 'cancel_btn') {
        item.parentElement.remove();
    }
}