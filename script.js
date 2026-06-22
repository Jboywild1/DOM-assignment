'use strict';


document.getElementById("text-para").textContent = "Counterfeit";

function colorChange() {
  const randomColor =  '#' + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = randomColor;
}

function colorChange2() {
  const randomColor =  '#' + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.color = randomColor;
}


document.querySelector("#newL").addEventListener("click", newList);

function newList() {
  let randomText = Math.random() * 10;
  if (randomText <= 3){
    randomText = 'Dave Concerts';
  }else if(randomText <= 7){
    randomText = 'Netflix and chill';
  }else {
    randomText = 'Generational Wealth';
  };

  let li = document.createElement("li");
  li.textContent = randomText;

  document.getElementById("myList").appendChild(li);
};

const secretText =document.getElementById("secret-text");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
  secretText.classList.toggle("hidden");
});