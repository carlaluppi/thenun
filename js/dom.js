

//Add Coder from Front

let IdCounter = 0;
const input = document.querySelector('input[type="text"]');
const add = document.querySelector('addBtn')

coderInput.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim().length != 0) {

        addName();
    }
});

list.addEventListener('click', (e) => {
    // console.log(e.srcElement.nodeName);
    if (e.srcElement.nodeName == 'INPUT') {
        updateStats();
    } else if (e.srcElement.nodeName == 'IMG') {
        // console.log(e.srcElement.parentNode.id);
        deleteName(e.srcElement.parentNode.id);
    }

})

let addName = () => {
    IdCounter++;
    let newValue = input.value;
    list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
        <label>            
            ${newValue}
        </label>
        
        <img src="./images/delete.png" class="closeBtn">
    </div>
    `

    input.value = '';
    updateStats();
};

let updateStats = () => {
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    // statutus.innerHTML = `<p>Tareas pendientes: ${element.length} completadas: ${checkbox.length}</p>`
};

let deleteName = (id) => {
    let nameToDelete = document.getElementById(id);
    list.removeChild(nameToDelete);
    updateStats();

}