// define container referencing our HTML so we can have a place to create the squares using JS
const container = document.querySelector("#container");

//a function to create a grid, for each loop it will define a variable "square" which equals a createElement function, you then add a class to the created element and then add it to the container div
function createGrid(num) {
    for (i = 0; i < num; i++) {
        let square = document.createElement(`square`)
        square.classList.add("square");
        container.appendChild(square);
    }
}

createGrid(16);