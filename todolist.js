// When loading the page, load from localStorage.
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: '',
  dueDate: '',
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  
  todoList.forEach((todoObject,index)=>{
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button 
      " class="delete-todo-btn js-delete-todo-btn">Delete</button> 
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-list')
    .innerHTML = todoListHTML;
    
  document.querySelectorAll('.js-delete-todo-btn').forEach((value,index)=>value.addEventListener('click',()=>{todoList.splice(index, 1);
        renderTodoList();
        saveToStorage();}))
        
}
let addBtn=document.querySelector('.js-add-todo-btn');
addBtn.addEventListener('click',()=>{
  addTodo();
  toggleText();});

function toggleText(){
  addBtn.innerHTML="Added";
  setTimeout(()=>{
  addBtn.innerHTML="Add";
  }, 1000);
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-dateinput');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}