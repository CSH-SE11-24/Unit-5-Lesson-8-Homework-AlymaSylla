console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let button = document.querySelector("#buttonOne")
console.log(button)
// Select the first p tag under that button
let ptag = document.querySelector("#textOne")
console.log(ptag)
// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"
button.addEventListener("click", function(event){
  ptag.textContent = "You guessed wrong"
})


// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tag
let secondbutton = document.querySelector("#buttonTwo")
console.log(secondbutton)

let ptagtwo = document.querySelector("#textTwo")
console.log(ptagtwo)


// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"
secondbutton.addEventListener("click", function(event){
  ptagtwo.textContent = "You guessed right!"
})


// Task 3: Dog image flow
// Select the dog image
let image = document.querySelector("#dog")
console.log(image)
// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click
image.addEventListener("mouseover", function(event){
  image.src = "post-boop.png"
})



// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.png
// Yellow: You can skip this
image.addEventListener("mouseout", function(event){
  image.src = "pre-boop.png"
})



// Task 4: Secret code flow
// Select the input
let input = document.querySelector("#code")
console.log(input)



// Add an event listener to the input such that when a key is pressed, you console log the value

input.addEventListener("keypress", function(event) {
 console.log(input.value) })

// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)




