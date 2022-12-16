// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

/* Changes color of current*/
const current = document.querySelector("#current-color")
const pallet = document.querySelectorAll(".color");

pallet.forEach(color => color.addEventListener("click", () => {
  current.style.backgroundColor = color.style.backgroundColor
})
)

/* Change cell color */
const cells = document.querySelectorAll(".cell")

cells.forEach(cell => cell.addEventListener("click", () => {
  cell.style.backgroundColor = current.style.backgroundColor 
})
)