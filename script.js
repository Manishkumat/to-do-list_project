const input=document.querySelector(".input-box");
const buttoon=document.querySelector(".add-button");
const todoList=document.querySelector(".todo-list");
buttoon.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTodo)
function addTodo(event){
    event.preventDefault();
    //console.log(input.value);
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo-container");
    const todoItem =document.createElement("li");
    todoItem.classList.add("todo-item");
   todoItem.innerText=input.value;
    todoDiv.appendChild(todoItem);
    const deleteButton =document.createElement("div");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML= '<i class="fa-solid fa-trash"></i>';
    todoDiv.appendChild(deleteButton);
    const completeButton =document.createElement("div");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML='<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeButton);

    todoList.appendChild(todoDiv);
    input.value="";

}
function deleteTodo(event){
    console.log(event.target);
    const item=event.target;
    if(item.classList[0]==="delete-btn"){
        //item.remove();
    const delItem=item.parentElement;
    delItem.remove();

    }
    if(item.classList[0]==="complete-btn")
        {
        //item.remove();
    const delItem=item.parentElement;
    delItem.classList.toggle("completed");
    }
}