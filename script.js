const $modal = document.getElementById('modal');
const $descriptionInput = document.getElementById('description');
const $prioridadeInput = document.getElementById('prioridade');
const $deadlineInput = document.getElementById('deadline');

var todoList = [];

function openModal() {
    $modal.style.display = "flex";
}

function closeModal() {
    $modal.style.display = "none";
}

function generateCards() {
    
}


function createTask() {
    const newTask = {
        description: $descriptionInput.value,
        prioridade: $prioridadeInput.value,
        deadline: $deadlineInput.value,
    }

    todoList.push(newTask);

    closeModal();

    console.log(todoList);
}


































