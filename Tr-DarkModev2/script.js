function toggleDarkMode(){
  document.body.classList.toggle('modo-oscuro');
  
  var button = document.getElementById('modeSwitch');
  if(document.body.classList.contains('modo-oscuro')){
      button.textContent = '🌞';
  }
  else{
      button.textContent = '🌚';
  }
}