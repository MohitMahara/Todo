const todoInput = document.querySelector(".add-task input[type = 'text' ] ");
const taskContainer = document.querySelector(".task-container");
const addButton = document.querySelector(".add-icon");

addButton.addEventListener("click", function () {

    const liElement = document.createElement('li');
    liElement.classList.add("list-item");
    todoText = todoInput.value;
    todoInput.value = "";
    liElement.innerHTML = `<span class="todo-text">${todoText}</span>
                           <div class="todo-btn">
                             <i class="fa-solid fa-trash fa-lg remove"></i>
                           </div>`
                           
    taskContainer.append(liElement);


});


taskContainer.addEventListener("click", function (e) {

  if (e.target.classList.contains("remove")) {
    e.target.parentNode.parentNode.remove();
  }

})