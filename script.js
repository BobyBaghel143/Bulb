let box = document.querySelector(".box");
let btn = document.querySelector("#btn");
let btnn = document.querySelector("#btnn");

let currColor = "white";

btn.addEventListener("click", () => {
  if (currColor === "white") {
    currColor = "yellow";
    box.classList.add("yellow");
    box.classList.remove("white");
  }
  //   else {
  //     currColor = "white";
  //     box.classList.add("white");
  //     box.classList.remove("yellow");
  //   }
  console.log(currColor);
});

btnn.addEventListener("click", () => {
  if (currColor === "yellow") {
    currColor = "white";
    box.classList.add("white");
    box.classList.remove("yellow");
    }
    console.log(currColor);
});

