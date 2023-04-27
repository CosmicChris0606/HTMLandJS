"use strict";

console.log("The index.js has begun executing...")

//Here we declare the variables we need in reference to the html

const greeting= document.getElementById("greeting");
const nameTextBox = document.getElementById("nameTextbox");
const pressMeButton = document.getElementById("pressMeButton");

// Code in the init function will eun when the page is finished initializing.
//It does this because of the window.onload line below...
function init(){
 console.log("Hello from inside the init function!");

 pressMeButton.onclick = onPressMeButtonClicked
}


window.onload = init;

function onPressMeButtonClicked(){
    console.log("Hello from inside the onPressMeButtonClicked()");

    let username = nameTextBox.value;

    greetingn.innerHTML = `Hello ${username} inside the onPressMeButtonClicked`
}


console.log("The index.js has finished executing...");