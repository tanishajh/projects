                                            
let h3 = document.querySelector("h3");
let box = document.querySelector(".box");
let btn = document.querySelector("button");

function color() {
  let digit1 = Math.floor(Math.random() * 255);
  let digit2 = Math.floor(Math.random() * 255);
  let digit3 = Math.floor(Math.random() * 255);
  let randomColor = (`${digit1}`, `${digit2}`, `${digit3}`);
  return randomColor;
}

btn.addEventListener("click", () => {
  h3.innerText = `rgb(${color()} , ${color()} , ${color()} )`;
  box.style.backgroundColor = `rgb(${color()} , ${color()} , ${color()})`;
});