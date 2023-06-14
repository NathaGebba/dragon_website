console.log("Dragon eye.");

var button = document.getElementById("fire")

button.addEventListener("click", function(){
    button.style.padding = Math.random() * 30 + "px"
    button.style.fontSize = "30px"
})

console.log(button);