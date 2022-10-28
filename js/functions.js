
/**
 * Selecciona un nombre aleatorio de un array, y luego lo elimina de este.
 */
function nameSelect() {
    let random = savedNames.sort(() => .5 - Math.random()).slice(0, 1)
    let elem = document.querySelectorAll('span');
    console.log(random)
    elem[19].innerText = random[0].task
    savedNames.forEach(function(e){
      if(e.task == random[0].task){
          savedNames.splice(savedNames.findIndex(function(i){
            return i.task === random[0].task;
          }), 1);
      }});
      elem[19].classList.add('flip-in-ver-right')
      console.log(savedNames)
      setTimeout(function(){elem[19].classList.remove('flip-in-ver-right')}, 2000)
  }
  
  
  /**
   * Si el array está vacio, muestra un popup y nos lleva a la página principal.
   */
  function gameReset () {
    if(savedNames.length < 1 ){
    let popup2 = document.getElementById("myPopup2");
    popup2.innerText = `Todos los coders han sido sacrificados`
    popup2.classList.toggle("show");
    setTimeout(function(){
      popup2.classList.toggle("show")}, 3000);
    setTimeout(function(){document.location.href="index.html"}, 4500);
  }}
  
  
  /**
   *  Selecciona todos los spans en el documento, y luego cambia el texto del span numero 20(target) a 'Coder'.
   */
  function nameReset() {
    let elem = document.querySelectorAll('span');
    elem[19].innerText = "Coder";
  }
  
  

  
  /**
   * Cuando la funcion es llamada, añade la clase 'scale-up-center'(animacion) al elemento con el id 'faceNun'
   * pone el sonido killSound, y despues de 2.5 segundos, quita la clase 'scale-up-center' del elemento que tiene id 'faceNun'
   */
  function nunAnimation() {
    faceNun.classList.add("scale-up-center");
    sounds.killSound.play();
  
    setTimeout(function(){faceNun.classList.remove("scale-up-center")}, 2500)
  }
  
  
  /**
   * Cuando la funcion es llamada, añade la clase 'hallwWayCreepy' al elemento con el id 'hallWayCreepy' y luego
   * lo quita despues de 4.5 segundos.
   */
  function oscurecerAnimation() {
    hallWayCreepy.classList.add("hallWayCreepy");
  setTimeout(function(){hallWayCreepy.classList.remove("hallWayCreepy")}, 4500)}
    
  
  
 /**
  * cuando la funcion es llamada, añade la clase 'crossout' al span numero 20(target) y luego
  * lo quita despues de 2 segundos.
  */
  function crossOutAnimation() {
    let elem = document.querySelectorAll('span')
    elem[19].classList.add('crossout')
    setTimeout(function(){elem[19].classList.remove('crossout')}, 2000)
  }
  

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
  setTimeout(function(){roulette.classList.remove('slide-right');
  sounds.win.pause();
  currentTime=0;
  }, 7000);
  setTimeout(function(){nunAnimation()}, 7500);
  
  setTimeout(function(){oscurecerAnimation();}, 9500);
  setTimeout(function(){deathPopUp();
  }, 11000);
  setTimeout(function(){gameReset();}, 15000);
  }
  
  
  /**
   * Utiliza el texto del span numero 20 en el html y lo pone en el popup.
   */
  function deathPopUp() {
    let elem = document.querySelectorAll('span')
    let popup = document.getElementById("myPopup");
    popup.innerText = `${elem[19].innerText} ha sido sacrificad@.`
    popup.classList.toggle("show");
    setTimeout(function(){
      popup.classList.toggle("show");
    }, 3000)
  }
  