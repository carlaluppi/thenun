let sounds = {
  spin: new Audio('https://cdn.rawgit.com/ManzDev/cursos-assets/gh-pages/js/spin.mp3'),
  win: new Audio('https://cdn.rawgit.com/ManzDev/cursos-assets/gh-pages/js/win.mp3')
}

let roulette = document.querySelector('#roulette');
let arrow = document.querySelector('#arrow');
let txt = document.querySelector('#txt');
let item = document.querySelector('#item');
let killBtn = document.querySelector('#killBtn');
let addBtn = document.querySelector('#addBtn');
let submit = document.querySelector('#submit');


// const randomElement = items[Math.floor(Math.random() * items.length)];
const killBtnHandler = () => {
  spin();
}

const submitHandler = (e) => {
  e.preventDefault();
  addName();
}

const addListener = () => {
    killBtn.addEventListener('click', killBtnHandler);
    submit.addEventListener('submit', submitHandler);
}

addListener();

// funcion para añadir los nombres a la roulette

dummyitems.forEach(function(e) {
let newItem = item.content.cloneNode(true);
newItem.querySelector('span').textContent = e.name;
roulette.appendChild(newItem);
});


// funcion que crea un nombre al azar, cambia el nombre target por ese nombre, y luego lo elimina del array "items"


function addName(){
  boxvalue = document.getElementById('submitText').value;
  console.log(boxvalue)
  let objectName = {
    name: boxvalue
  }
  items.push(objectName);
  console.log(items)
  return false;
 }

function nameSelect() {
  let random = items.sort(() => .5 - Math.random()).slice(0, 1)
  let elem = document.querySelectorAll('span');
  console.log(random)
  elem[19].innerText = random[0].name
  items.forEach(function(e){
    if(e.name == random[0].name){
        items.splice(items.findIndex(function(i){
          return i.name === random[0].name;
        }), 1);
        console.log(items)
    }
    elem[19].classList.add('flip-in-ver-right')
    setTimeout(function(){elem[19].classList.remove('flip-in-ver-right')}, 2000)
  })
}

// resetea el nombre del target a "Coder"

function nameReset() {
  let elem = document.querySelectorAll('span');
  elem[19].innerText = "Coder";
}

// funcion que raya el nombre

function crossOutAnimation() {
  let elem = document.querySelectorAll('span')
  elem[19].classList.add('crossout')
  setTimeout(function(){elem[19].classList.remove('crossout')}, 2000)
}

// funcion que ejecuta el nameChange, gira la ruleta, y utiliza sonidos(los cuales resetea al final)

function spin() {
nameReset();
sounds.spin.play();
roulette.classList.add('slide-right');
arrow.classList.remove('shine');

setTimeout(function() {
  sounds.spin.pause();
  sounds.spin.currentTime = 0;
  sounds.win.play();
  arrow.classList.add('shine');
  nameSelect();
}, 4500);
setTimeout(function(){crossOutAnimation();}, 5000);
setTimeout(function(){roulette.classList.remove('slide-right');}, 6500);
}