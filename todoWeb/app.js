//Selecters
const inputTodo = document.querySelector('.input-todo');
const listTodo = document.querySelector('.todo-list');
const buttonTodo = document.querySelector('.button-todo');
const buttonTask = document.querySelector('.task'); 
const buttonImportant = document.querySelector('.important'); 
const buttonComplete = document.querySelector('.completed'); 
const buttonUncomplete = document.querySelector('.uncompleted'); 

//Events
buttonTodo.addEventListener('click', addTodo);
listTodo.addEventListener('click', buttonTodoAction);
buttonTask.addEventListener('click', categoryTodo);
buttonImportant.addEventListener('click', categoryTodo);
buttonComplete.addEventListener('click', categoryTodo);
buttonUncomplete.addEventListener('click', categoryTodo);
document.addEventListener('DOMContentLoaded', getTodo)
//Functions
function addTodo(event){
    event.preventDefault();
    if(inputTodo.value != ''){
        //create todo DIV
        const tDiv = document.createElement("div");
        tDiv.classList.add("todo");
        //Complete mark button
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = '<i class="far fa-circle"></i>';
        completeBtn.classList.add("complete-btn");
        tDiv.appendChild(completeBtn);
        //Create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = inputTodo.value; 
        newTodo.classList.add('item');
        tDiv.appendChild(newTodo);
        //SAVE todo TO local
        saveLocal(inputTodo.value);
        //important mark button
        const importantBtn = document.createElement("button");
        importantBtn.innerHTML = '<i class="far fa-star"></i>';
        importantBtn.classList.add("important-btn");
        tDiv.appendChild(importantBtn);
        
        //trash mark button
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        trashBtn.classList.add("trash-btn");
        tDiv.appendChild(trashBtn);
        
        //append to list
        listTodo.append(tDiv);
        //clear value input
        inputTodo.value = '';
    }
}

function buttonTodoAction(event){
    const btn = event.target;
    //DELETE section
    if(btn.classList[0] === 'trash-btn'){
        const todo = btn.parentElement;
        //animetion
        todo.classList.add('delete-anime')
        deleteLocalTodo(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    //COMPLETED section
    if(btn.classList[0] === 'complete-btn'){
        const todo = btn.parentElement;
        todo.classList.toggle("complete-action");
    }

    //IMPORTANT section
    if(btn.classList[0] === 'important-btn'){
            const todo = btn.parentElement;
            todo.classList.toggle("important-action");
            btn.classList.toggle("important-action");
    }
}

function categoryTodo(event){
    const allTodo = listTodo.childNodes;
    let id = event.path[0].id;
    allTodo.forEach(function(todo){
        if(allTodo[0] === todo){
        }else{

            switch(id){
                case "task":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if(todo.classList.contains("complete-action")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                    break;
                case "important":
                    console.log(todo.classList)
                    if(todo.classList.contains("important-action")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if(!todo.classList.contains("complete-action")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    });       
}

function saveLocal(todo){
    //CHECK if already have the todos
    let todos;
    if(localStorage.getItem("todos") === null){
        todos= [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodo(todo){
    //CHECK if already have the todos
    let todos;
    if(localStorage.getItem("todos") === null){
        todos= [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        //create todo DIV
        const tDiv = document.createElement("div");
        tDiv.classList.add("todo");
        //Complete mark button
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = '<i class="far fa-circle"></i>';
        completeBtn.classList.add("complete-btn");
        tDiv.appendChild(completeBtn);
        //Create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todo; 
        newTodo.classList.add('item');
        tDiv.appendChild(newTodo);
        //important mark button
        const importantBtn = document.createElement("button");
        importantBtn.innerHTML = '<i class="far fa-star"></i>';
        importantBtn.classList.add("important-btn");
        tDiv.appendChild(importantBtn);
        
        //trash mark button
        const trashBtn = document.createElement("button");
        trashBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        trashBtn.classList.add("trash-btn");
        tDiv.appendChild(trashBtn);
        
        //append to list
        listTodo.append(tDiv);
    });

}

function deleteLocalTodo(todo){
    //CHECK if already have the todos
    let todos;
    if(localStorage.getItem("todos") === null){
        todos= [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const index = todo.children[0].innerText;
    todos.splice(todos.indexOf(index), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}