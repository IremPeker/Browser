// change the body font-size and background
const body = document.getElementsByTagName("body")[0];
body.style.width = "100%";
body.style.fontSize = "18px";
body.style.background = "bisque";
if (window.innerWidth > 667) {
  body.style.height = "600px";
} else {
  body.style.height = "1100px";
}

// align h1 in the center
const h1 = document.querySelector(".title");
h1.style.textAlign = "center";

// colorGenerator

colorGenerator = () => {
  var trans = "0.5"; // 50% transparency
  var color = "rgba(";
  for (var i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 255) + ",";
  }
  color += trans + ")"; // add the transparency
  return color;
};

// change color and font style of category classes && change the color of food-category class

for (let i = 0; i < 3; i++) {
  document.getElementsByClassName("category")[i].style.fontStyle = "oblique";
  document.getElementsByClassName("category")[i].style.color = "blue";
  document.getElementsByClassName("food-category")[
    i
  ].style.background = colorGenerator();
  document.getElementsByClassName("food-category")[i].style.minWidth = "150px";
  document.getElementsByClassName("food-category")[i].style.width = "28%";
}

// align the food-category list in a row

const main = document.querySelector(".main");
console.log(`main=>`, main);
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.flexDirection = "row";
main.style.flexGrow = "1";
main.style.justifyContent = "space-evenly";

// change the size and font of the warning id
const warning = document.getElementById("warning");
warning.style.fontSize = "20px";
warning.style.color = "green";

// change the background color of even alergy info items

const ulLength = document.querySelectorAll(".allergies li").length;

const li = document.querySelectorAll(".allergy-info");

for (let i = 0; i < ulLength; i++) {
  li[i].style.listStyle = "none";
  li[i].style.marginLeft = "0";
  li[i].style.width = "150px";
  li[i].style.textAlign = "center";
  if (i % 2 == 0) {
    li[i].style.background = "green";
  }
}

// allergy-warning appear as a column in the center

const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexDirection = "column";
allergySection.style.alignItems = "center";

// style footer

const footer = document.querySelector(".footer");
footer.style.textAlign = "center";
footer.style.display = "flex";
if (window.innerWidth > 667) {
  footer.style.flexDirection = "row";
} else {
  footer.style.flexDirection = "column";
  footer.style.alignItems = "center";
}
footer.style.flexWrap = "wrap";
footer.style.justifyContent = "space-evenly";

const footerSection = document.querySelectorAll(".footer section");

for (let i = 0; i < footerSection.length; i++) {
  footerSection[i].style.border = "thin solid green";
  footerSection[i].style.borderRadius = "25px";
  footerSection[i].style.minWidth = "150px";
  footerSection[i].style.width = "28%";
  footerSection[i].style.margin = "5px";
}
