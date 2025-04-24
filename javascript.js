// define container referencing our HTML so we can have a place to create the squares using JS
const container = document.querySelector("#container");
const button = document.querySelector('button');
const input = document.querySelector('input');

//a function to create a grid, for each loop it will define a variable "square" which equals a createElement function, you then add a class to the created element and then add it to the container div
function createGrid(num) {
    for (i = 0; i < num; i++) {
        let row = document.createElement(`div`)
        row.classList.add("row");
        container.appendChild(row); 
        for (j = 0; j < num; j++) {
            let square = document.createElement(`div`)
            square.classList.add("square");
            row.appendChild(square);
            square.addEventListener("mouseover", () => {
                square.classList.add("hoverSquare");
                      setTimeout(() => {
                square.classList.remove("hoverSquare");
              }, 3000);
            })
        }
    }
   
}

// a function to create a new grid on user input

//looks for the button to be clicked
button.addEventListener("click", () => {
    //defines a variable to be given the value of the users input
    let gridSize = input.value
    //resets the text within the input box
    input.value = ""
    //deletes the old grid - referencing the parent as the rows and squares are only defined within the createGrid function and cannot be referenced here
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    //runs the create grid function
    createGrid(gridSize)
})


createGrid(22);