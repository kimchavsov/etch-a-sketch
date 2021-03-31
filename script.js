const container = document.querySelector(".container");
let divItem;

let colors = ['#ff0000', '#00ff00', '#0000ff'];
let random_color = colors[Math.floor(Math.random() * colors.length)];

const sizeRange = document.querySelector("#grid-size")
const btn = document.querySelector("#btn-change")
const sizeLabel = document.querySelector("#size-label")
// create grid 
createGrid();

function createGrid(row=16, column=16){
  container.style.setProperty('--num-row', row)
  container.style.setProperty('--num-col', column)
  for (let i = 0; i < column * row; i++) {
    divItem = document.createElement('div');
    divItem.classList.add("item");
    container.appendChild(divItem);
  }

  // Draw the sketch
  const items = document.querySelectorAll(".item")

  function drawSkecth() {
    this.classList.add("mouseover"); 
  }

  items.forEach(item => item.addEventListener('mouseover', drawSkecth));
}

function changeSize() {
  const allItems = document.querySelectorAll('.item')
  allItems.forEach(item => container.removeChild(item));
  const size = sizeRange.value;
  createGrid(size,size);
}
console.log(sizeRange.value)

function changeLabel() {
  sizeLabel.textContent = `${sizeRange.value}`
}

// create button that apply the changesize
btn.addEventListener('click', changeSize)

// When slide the range will change the input
sizeRange.addEventListener('input', changeLabel)
