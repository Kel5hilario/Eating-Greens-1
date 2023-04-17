/* Declared variables below to save the different sections (divs) of my menu/pages */
let menuOpening = document.querySelector('.menu-opening');
let buttonOne = document.querySelector('.button');
let buttonTwo = document.querySelector('.button2');
let page = document.querySelector('.page1');
let button1 = document.querySelector('.B1');
let button2 = document.querySelector('.B2');

/*  event handlers*/
button1.onclick = function(){
  menuOpening.style.display = 'none';
  page.style.display = 'block';
  buttonOne.style.display = 'none';
}

button2.onclick = function(){
  menuOpening.style.display = 'block';
  page.style.display = 'none';
  buttonOne.style.display = 'none';
  buttonTwo.style.display = 'none';
}





