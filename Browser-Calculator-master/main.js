const inputTarget = document.querySelectorAll(".calc-input-target");
let valArr = [];

Array.from(inputTarget).forEach(child => {
  //console.log(child.previousElementSibling.id); // this works
  //console.log(child.previousElementSibling.value);  // works
  child.onkeydown = e => {
    if (e.key === "Enter" && valArr.length < 2) {
      valArr.push(
        Number(child.previousElementSibling.value),
        Number(child.value)
      );
      console.log(`valArr=>`, valArr);
      if (child.previousElementSibling.id === "add") {
        child.nextElementSibling.value = valArr.reduce((acc, val) => acc + val);
      }
      if (child.previousElementSibling.id === "subtract") {
        child.nextElementSibling.value = valArr.reduce((acc, val) => acc - val);
      }
      if (child.previousElementSibling.id === "multiply") {
        child.nextElementSibling.value = valArr.reduce((acc, val) => acc * val);
      }
      if (child.previousElementSibling.id === "divide") {
        child.nextElementSibling.value = valArr.reduce((acc, val) => acc / val);
      }
      if (child.previousElementSibling.id === "modulo") {
        child.nextElementSibling.value = valArr.reduce((acc, val) => acc % val);
      }
    } else {
      valArr = [];
    }
  };
});
