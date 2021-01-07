if(typeof localStorage.tasks==='undefined'){
localStorage.tasks = JSON.stringify([]);
}



updateList();

function addEvent(){

let input = document.getElementById("Task_input");

let tasksArr = JSON.parse(localStorage.tasks);

tasksArr.push(input.value);

localStorage.tasks = JSON.stringify(tasksArr);

input.value = "";

updateList();
}

function updateList(){

let ul = document.getElementById("tasks");

let tasksArr = JSON.parse(localStorage.tasks);



let length = tasksArr.length - 1;
let html = "";

for(let i = length; i > -1; i--){

html += '<li class="list-group-item"id="'+i+'">'+tasksArr[i]+'<span class="btn btn-danger btn-sm float-right remove-btn" onClick="removeItem(this)">Remove</span></li>';
}
ul.innerHTML = html;

}

function removeItem(obj){
index_id = obj.parentElement.id;
let tasksArr = JSON.parse(localStorage.tasks);
tasksArr.splice(index_id,1);

localStorage.tasks = JSON.stringify(tasksArr);
updateList();
}