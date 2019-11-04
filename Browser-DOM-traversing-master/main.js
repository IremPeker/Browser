// select the parent of the h1 class heading and give border
var header = document.querySelector(".heading").parentElement;

header.style.border = "5px solid purple";

// check if .info section children have .info-package class
var infoSection = document.querySelector(".info");

// infoSection.children => gives the children of info section

// select all .info-package titles and give the previous element a border
Array.from(infoSection.children).forEach(child => {
  child.children[1].previousElementSibling.style.border = "3px solid purple"; // child.children[1] selects p inside each .info-package
});

// check if label class matches mild, intense and change border

Array.from(infoSection.children).forEach(child => {
  if (child.children[2].classList[0] === "mild") {
    child.children[2].style.border = "solid yellow";
  }
  if (child.children[2].classList[0] === "intense") {
    child.children[2].style.border = "solid orange";
  } else {
    child.children[2].style.border = "solid red";
  }
});

//Add all the children of the .nav-list to the footer's unordered list, .links.

var navList = document.querySelector(".nav-list");
//navList.children => gives the li array

// const navListChild = Array.from(navList.children).forEach(child => {
//   console.log(child); // gives li one by one
// });

var footerUl = document.querySelector(".links");
var footerArr = document.querySelector(".links").children;

for (let i = 0; i < navList.children.length; i++) {
  var newLi = document.createElement("li");
  newLi.innerText = navList.children[i].innerText;
  footerUl.appendChild(newLi);
}
