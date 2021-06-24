// import functions

// reference needed DOM elements
const cat = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');
const dog = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');
const horse = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');
const horseBottom = document.getElementById('horse-bottom');

// set event listeners 

  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
cat.addEventListener('click', ()=>{catSound.play();
});

dog.addEventListener('click', ()=>{dogSound.play();

});

horse.addEventListener('click', ()=>{
  horseSound.play();
  horseBottom.classList.remove('hide');
  horse.classList.add('hide');
});

