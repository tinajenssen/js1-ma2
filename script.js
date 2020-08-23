// question 1
const button = document.querySelector("#bg");
button.onclick = function (){
  console.log(event.target);
  event.target.style.background = "green";
};

// question 2
const toggler = document.querySelector(".toggler");
function toggleClass(){
  event.target.classList.toggle("extra");
}

toggler.onclick = toggleClass;

// question 3
const dropdown = document.querySelector("select");
const paragraphsContainer = document.querySelector(".paragraphs-container");

dropdown.onchange = function(){
  console.log(event.target.value);

  const selectedValue = event.target.value;

  paragraphsContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++){
      paragraphsContainer.innerHTML += `<div class="p.content">${i}</div>`;
  }

};

// question 4
const input = document.querySelector('input');
const characterCount = document.querySelector(".char-count b");

input.onkeyup = function () {
    console.log(event.target.value.length);

    const len = event.target.value.length;

    characterCount.innerHTML = len;
};

// question 5
const body = document.querySelector("body");

function handleScroll() {
    console.log(window.scrollY);

    const scrolledY = window.scrollY;

    if (scrolledY > 35) {
        document.body.classList.add("highlight");
        body.classList.add("highlight");
    } else {
        document.body.classList.remove("highlight");
        body.classList.remove("highlight");
    }
}

window.addEventListener("scroll", handleScroll);
