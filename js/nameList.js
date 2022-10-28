const input = document.querySelector('input[type="text"]');
const listTasks = document.querySelector('.list-tasks ul');
const message = document.querySelector('.list-tasks');
let tasks = [];


/* Listening for a submit event on the form. */
coderInput.addEventListener('submit', (e) => {
    e.preventDefault();
    /* Checking if the input is empty or not. */    

        addTasks();
    
});
/* Listening for a click event on the button. */
Btnid.addEventListener('click', (e) => {
    /* It prevents the default action of the event. */
    e.preventDefault();
    /* Checking if the input is empty or not. */   

        addTasks();    
});

Removeid.addEventListener('click', (e) => {
    e.preventDefault();
    /* Checking if the input is empty or not. */
    
        deleteAll();
    
});

eventListeners();
function eventListeners(){
    /* Listening for the DOM to be loaded. */
    document.addEventListener('DOMContentLoaded', () => {
        /* Checking if there is a value in the local storage, if there is, it will parse it and assign
        it to the tasks variable. If there is no value, it will assign an empty array to the tasks
        variable. */
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        /* Creating the HTML for the list of tasks. */
        createHTML();
    });

    /* Listening for a click event on the list of tasks. */
    listTasks.addEventListener('click', deleteTask);
}

/* Deleting the task from the list. */
function deleteTask(e){
    if (/* Checking if the element clicked is a span. */
    e.target.tagName == 'SPAN') {
        /* Getting the id of the task that is going to be deleted. */
        const deleteId = parseInt(e.target.getAttribute('task-id'));
        /* Filtering the tasks array and returning a new array with the tasks that have an id different
        than the one that is going to be deleted. */
        tasks = tasks.filter(task => task.id !== deleteId);
        /* Creating the HTML for the list of tasks. */
        createHTML();
    }
}

/**
 * It takes the array of tasks and sets it to an empty array. Then it calls the createHTML function to
 * update the HTML.
 */
function deleteAll(){
    tasks = [];
    createHTML();
}



/**
 * The function takes the value of the input field and adds it to the tasks array.
 * @returns the value of the input field.
 */
function addTasks(){
    /* Taking the value of the input field and assigning it to the task variable. */
    const task = input.value;
    if (task === '') {
        showError('The field is empty...');
        return;
    }

    /* Creating an object with the task and the id. */
    const taskObj = {
        task,
        id: Date.now()
    }
    /* Adding the new task to the tasks array. */
    tasks = [...tasks, taskObj]

    /* Creating the HTML for the list of tasks. */
    createHTML();
    /* Clearing the input field. */
    input.value = '';
}

function createHTML(){
    clearHTML();

    if (tasks.length > 0) {
        tasks.forEach(task => {
            /* Creating a new element in the DOM. */
            const li = document.createElement('li');
            /* Creating a new element in the DOM. */
            li.innerHTML = `${task.task} <span task-id="${task.id}" >X</span>`;

            /* Adding the new element to the list of tasks. */
            listTasks.appendChild(li);
        });
    }

    /* A function that is called when the createHTML function is called. It takes the tasks array and
    sets it to the local storage. */
    sincronizationStorage();
}

/**
 * It takes the tasks array and converts it to a string, then stores it in local storage.
 */
function sincronizationStorage(){
    /* Taking the tasks array and converting it to a string, then storing it in local storage. */
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/**
 * The function showError() creates a new paragraph element, adds the error message to it, adds a class
 * to it, adds it to the message div, and then removes it after 2 seconds.
 * @param error - The error message to display.
 */
/**
 * The function showError() creates a new paragraph element, adds the error message to it, adds the
 * class 'error' to it, adds it to the message div, and then removes it after 2 seconds.
 * @param error - The error message to display.
 */
function showError(error){
    const messageError = document.createElement('p');
    messageError.textContent = error;
    messageError.classList.add('error');

    message.appendChild(messageError);
    setTimeout(() => {
        messageError.remove();
    },2000);

}

/**
 * The function clearHTML() is a function that clears the HTML of the listTasks element.
 */
function clearHTML(){
    listTasks.innerHTML = '';
}