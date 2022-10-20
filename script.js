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

items.forEach(function(e) {
let newItem = item.content.cloneNode(true);
newItem.querySelector('span').textContent = e.name;
roulette.appendChild(newItem);
});
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
}, 2500)}