// Requisito 5
const input = document.getElementById('texto-tarefa');
const createTaskBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  if (input.value !== '') {
    const li = document.createElement('li');
    taskList.appendChild(li);
    li.innerHTML = input.value;
    input.value = '';
    li.classList.add('list-item');
  }
}

createTaskBtn.addEventListener('click', createTask);

// Requisito 7
function paintSelected() {
  const selectTask = document.getElementById('lista-tarefas');
  selectTask.addEventListener('click', (selectEvent) => {
    const listItem = document.querySelectorAll('.list-item');
    for (let index = 0; index < listItem.length; index += 1) {
      if (listItem[index] === selectEvent.target) {
        selectEvent.target.classList.add('selected');
      } else {
        listItem[index].classList.remove('selected');
      }
    }
  });
}
createTask();
paintSelected();
