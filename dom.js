function square() {

    let redElement = document.getElementById('red');
    let poe = 0;
    let animation = setInterval(anim, 5);

    function anim() {
        if (poe == 350) {
            clearInterval(animation);
        } else {

            poe++;
            redElement.style.top = poe + "px";
            redElement.style.left = poe + "px";
        }

    }

}

// btnexample.addEventListener('click', ( => {
//     console.
// }))

let IdCounter = 0;
const input = document.querySelector('input[type="text"]');

coderInput.addEventListener('submit', (e) => {
    e.preventDefault();
    addName();
});

list.addEventListener('click', (e) => {
    // console.log(e.srcElement.nodeName);
    if(e.srcElement.nodeName == 'INPUT'){
        updateStats();
    } else if(e.srcElement.nodeName == 'IMG') {
        // console.log(e.srcElement.parentNode.id);
        deleteName(e.srcElement.parentNode.id);
    }

})

let addName = () => {
    IdCounter ++;
    let newValue = input.value;
    list.innerHTML += `
    <div class="task-container" id="${IdCounter}">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="" class="closeBtn">
    </div>
    `

    input.value = '';
    updateStats();
};

let updateStats = () => {
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked')
    statutus.innerHTML = `<p>Tareas pendientes: ${element.length} completadas: ${checkbox.length}</p>`
};

let deleteName = (id) => {
    let nameToDelete = document.getElementById(id);
    list.removeChild(nameToDelete);
    updateStats();

}