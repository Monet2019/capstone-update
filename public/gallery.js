
var elements = document.getElementsByClassName("column");


var i;


function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%"; 
  }
}


function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%"; 
  }
}


function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%"; 
  }
}
