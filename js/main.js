var button = document.querySelector('button');
var backgroundColor = document.querySelector('body');
var textStatus = document.querySelector('h1');

function changeStatus(){

  // backgroundColor.className = '.dark';
  // textStatus.innerText='It is dark in here';
  // button.className = 'switch off';

  if button.classList.contains('on'){
    backgroundColor.className = '.dark';
    textStatus.innerText='It is dark in here';
    button.className = 'switch off';
  }
  else if button.classList.contains('off'){
    backgroundColor.className = '.light';
    textStatus.innerText='It is bright in here';
    button.className = 'switch on';
  }

}

button.addEventListener('click', changeStatus);
