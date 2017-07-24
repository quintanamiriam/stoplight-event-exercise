(function() {
  'use strict';
  var button = document.getElementById("stopButton")
  var light = document.getElementById("stopLight")
  console.log(button)
  button.addEventListener("click", function(){
  light.style.backgroundColor = "red"});


var button2 = document.getElementById("slowButton")
var light2 = document.getElementById("slowLight")
console.log(button2)
button2.addEventListener("click", function(){
light2.style.backgroundColor = "yellow"})


var button3 = document.getElementById("goButton")
var light3 = document.getElementById("goLight")
console.log(button3)
button3.addEventListener("click", function(){
light3.style.backgroundColor = "green"})

}) ();
