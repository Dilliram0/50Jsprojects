const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

function addTask(task){
    let listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /> <span> ${task} </span> <button> Delete </button>`;
    taskList.appendChild(listItem);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input = document.querySelector('#input-task');
    const task = input.value;
    addTask(task);
    input.value = "";
})

taskList.addEventListener('click', (e)=> {
    if(e.target.tagName === 'BUTTON'){
        const listItem = e.target.parentElement;
        taskList.removeChild(listItem);
        console.log(e.target.parentElement)
    }
    console.log(e.target.tagName);
})