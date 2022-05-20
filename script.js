var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("body")
var button = document.querySelector(".btn-one")



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  
  button.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(to right, " + getRandomColor() + ", " + getRandomColor() + ")";
    css.textContent = body.style.background + ";";
    
})

function changeColor() {
    document.body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}




color1.addEventListener("input", changeColor)

color2.addEventListener("input", changeColor)