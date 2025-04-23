// define container referencing our HTML so we can have a place to create the squares using JS
const container = document.querySelector("#container");
const button = document.querySelector('button');
const input = document.querySelector('input');

//a function to create a grid, for each loop it will define a variable "square" which equals a createElement function, you then add a class to the created element and then add it to the container div
function createGrid(num) {
    for (i = 0; i < num; i++) {
        let square = document.createElement(`div`)
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.classList.add("hoverSquare");
                  setTimeout(() => {
            square.classList.remove("hoverSquare");
          }, 3000);
        })
    }
}

createGrid(256);

button.addEventListener("click", () => {
    let gridSize = input.value
    input.value = ""
    createGrid(gridSize)
})