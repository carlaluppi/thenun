let sounds = {
  spin: new Audio('https://cdn.rawgit.com/ManzDev/cursos-assets/gh-pages/js/spin.mp3'),
  win: new Audio('https://cdn.rawgit.com/ManzDev/cursos-assets/gh-pages/js/win.mp3')
}

let roulette = document.querySelector('#roulette');
let arrow = document.querySelector('#arrow');
let txt = document.querySelector('#txt');
let item = document.querySelector('#item');
let button = document.querySelector('#btn')
let offset = 0;

// const randomElement = items[Math.floor(Math.random() * items.length)];





// funcion para añadir los nombres a la roulette

dummyitems.forEach(function(e) {
let newItem = item.content.cloneNode(true);
newItem.querySelector('span').textContent = e.name;
roulette.appendChild(newItem);
});


// funcion que cambia nombre del target

function nameChange() {
  let random = items.sort(() => .5 - Math.random()).slice(0, 1)
  console.log(random)
  let elem = document.querySelectorAll('span');
  elem[10].innerText = random[0].name
  items.forEach(function(e){
    if(e.name == random[0].name){
        
    }
  })
}

// funcion que ejecuta el nameChange, gira la ruleta, y utiliza sonidos(los cuales resetea al final)

function spin() {
sounds.spin.play();
roulette.classList.add('slide-right');
arrow.classList.remove('shine');

setTimeout(function() {
  sounds.spin.pause();
  sounds.spin.currentTime = 0;
  sounds.win.play();
  arrow.classList.add('shine');
  roulette.classList.remove('slide-right')
}, 2500
)
nameChange();
}