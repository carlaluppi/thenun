let sounds = {
    spin: new Audio('https://cdn.rawgit.com/ManzDev/cursos-assets/gh-pages/js/spin.mp3'),
    win: new Audio('https://cdn.rawgit.com/ManzDev/cursos-assets/gh-pages/js/win.mp3')
  }
  
  let roulette = document.querySelector('#roulette');
  let arrow = document.querySelector('#arrow');
  let txt = document.querySelector('#txt');
  let item = document.querySelector('#item');
  let offset = 0;




  let maxOffset = items.length * 195;

  const randomElement = items[Math.floor(Math.random() * items.length)];
  console.log(randomElement)
  
  let wheel = {
    speed: 100,
    
    getSpeed: function() {
      this.speed = this.speed - Math.round(Math.random() * 1);
      if (this.speed < 0)
        return 0;
      return this.speed;
    },
    resetSpeed: function() { this.speed = 100 }
  }
  
  items.forEach(function(e) {
    let newItem = item.content.cloneNode(true);
    newItem.querySelector('span').textContent = e[0];
    roulette.appendChild(newItem);
  });
                          
  function spin() {
    sounds.spin.play();
    arrow.classList.remove('shine');
    
    console.log('max: ', maxOffset);
    
    timer = setInterval(function() {
      offset = offset + wheel.getSpeed();
      if ((offset > maxOffset) || (offset < 0)) 
        offset = 0;
      roulette.style.transform = 'translateX(-'+offset+'px)';
    }, 10);
    setTimeout(function() {
      clearInterval(timer);
      wheel.resetSpeed();
      sounds.spin.pause();
      sounds.spin.currentTime = 0;
      sounds.win.play();
      arrow.classList.add('shine');
      /*
      let selected = Math.floor( (150 + offset) / (maxOffset / items.length) );
      txt.textContent = items[selected][1];
      */
    }, 2500);
    const elem = document.querySelector('.span');
    const rect = elem.getBoundingClientRect();
    for (const key in rect) {
          if (typeof rect[key] !== 'function') {
            console.log(rect[key[0]])
          }}
    // let rect = elem[0].getBoundingClientRect();
    console.log(elem)
  }

  // function update() {
  //   const container = document.getElementById("controls");
  //   const elem = document.getElementById("example");
  //   const rect = elem.getBoundingClientRect();
  
  //   container.innerHTML = '';
  //   for (const key in rect) {
  //     if (typeof rect[key] !== 'function') {
  //       let para = document.createElement('p');
  //       para.textContent = `${key} : ${rect[key]}`;
  //       container.appendChild(para);
  //       console.log(rect[key[0]])
  //     }
  //   }
  // }
  
  // document.addEventListener('scroll', update);
  // update();