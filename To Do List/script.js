let todoList = [];



function addToDo(){
    let inputElement = document.querySelector('#todo-add');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    todoList.push({item: todoItem, duedate: tododate});
    inputElement.value= '';
    dateElement.value= '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    

    let newHtml = '';

    for( i = 0; i < todoList.length; i++){
        let toInput =todoList[i].item;
        let todate = todoList[i].duedate;
        newHtml += `
           <span>${toInput}</span>
           <span>${todate}</span>
           <button class="btn-dlt" onclick ="todoList.splice(${i}, 1);
           displayItems();
           ">Delete</button>`


        containerElement.innerHTML = newHtml;
    }
     
}
