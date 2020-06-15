var resetBtn,addBtn,input,ul,
input = document.getElementById("inp")
addBtn = document.getElementById("add")
resetBtn = document.getElementById("reset")
ul = document.getElementById("list")

function inputLength() { 
    return input.value.length
}

function listCreator() { 
    li = document.createElement("li")
    li.appendChild(document.createTextNode(input.value))
    input.value = ''
    li.innerHTML +=' <input type="checkbox" onclick="check(this)"><button class="btn btn-danger" onclick="rem(this)">Delete</button'
    ul.appendChild(li)
}

function addListAfterClick() {
    var run = inputLength() > 1 && input.value !== '' ? listCreator() : false
}

function addListAfterEvent(event) {
    var run = inputLength() > 1 && event.keyCode===13 ? listCreator() : false
}

function resetOnClick() {
    ul.remove()
 }

addBtn.addEventListener("click",  addListAfterClick)
input.addEventListener("keypress", addListAfterEvent)
resetBtn.addEventListener("click", resetOnClick)

function check(list){
list.parentElement.classList.toggle('checked')
}

function rem(list) {
    list.parentElement.remove()
}