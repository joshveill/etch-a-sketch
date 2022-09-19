const board = document.querySelector(".board");
let colour = "black";

makeGrid(16);

function makeGrid(size) {
  if (size < 1 || size > 99) {
    makeGrid(16);
    alert("Please follow the instructions");
  } else {
    let oldGridItems = board.querySelectorAll("div");
    oldGridItems.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (let i = 0; i < size * size; i++) {
      const gridItem = document.createElement("div");
      gridItem.style.backgroundColor = "white";
      gridItem.addEventListener("mouseover", changeColour);
      board.appendChild(gridItem);
    }
  }
}

function colourChange(choice) {
  colour = choice;
}

function changeColour() {
  if (colour == "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = colour;
  }
}
