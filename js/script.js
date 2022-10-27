let sounds = {
  spin: new Audio('sounds/spinning-reel-27903.mp3'),
  win: new Audio('sounds/laughing-ghost-horror.mp3'),
  killSound: new Audio('sounds/demonic-woman-scream-6333.mp3')
}

let roulette = document.querySelector('#roulette');
let arrow = document.querySelector('#arrow');
let txt = document.querySelector('#txt');
let item = document.querySelector('#item');
let killBtn = document.querySelector('#killBtn');
let addBtn = document.querySelector('#addBtn');
let submit = document.querySelector('#submit');
let faceNun = document.querySelector('.faceNun');
let hallWayCreepy = document.querySelector('.hallWay');   

// const randomElement = items[Math.floor(Math.random() * items.length)];

// esta funcion saca los nombres del localStorage y los cambia de string a array


function render() {
  function retrieveNames() {
    savedNames = JSON.parse(localStorage.getItem("tasks"));
  }
  retrieveNames();
  console.log(savedNames)
  
  
  const killBtnHandler = () => {
    spin();
  }
  
  const addListener = () => {
      killBtn.addEventListener('click', killBtnHandler);
      // submit.addEventListener('submit', submitHandler);
  }
  addListener();
  // funcion para añadir los nombres falsos("Coders") a la roulette
  
  dummyitems.forEach(function(e) {
  let newItem = item.content.cloneNode(true);
  newItem.querySelector('span').textContent = e.name;
  roulette.appendChild(newItem);
  });
}
render();





// funcion alternativa para añadir nombres a un array con form y submit

// function addName(){
//   boxvalue = document.getElementById('submitText').value;
//   console.log(boxvalue)
//   let objectName = {
//     name: boxvalue
//   }
//   items.push(objectName);
//   console.log(items)
//   return false;
//  }

