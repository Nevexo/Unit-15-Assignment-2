// By Cameron Fleming - 20182242 (2019)

// JS used by the welcome page to change the highlighted section

// Words to use
const words = [
    "develop",
    "design",
    "innovate",
    "change",
    "rethink",
]
// Extra formatting options
const prefix = "" // Before the text
const affix = "" // After the text
// Timeer
const time = 3000 // In milliseconds (*1000)

let text = get("word")
let counter = 0

const update = () => {
    // Counter represents an item in the words array
    // If it has reached the end, set it back to zero.
    if (counter == words.length) {
        counter = 0
    }

    // First add "hide" class to the text (makes it fade out)
    text.classList.add("hide")
    // Wait 500ms for the fade out animation
    // Then update the text while it's hidden
    setTimeout(() => text.innerText = `${prefix}${words[counter]}${affix}`, 500) // Change the text to [prefix][string][affix]
    // Wait 500 seconds for the animations to complete
    // Now remove "hide" to play the fade in animation
    setTimeout(() => {
        text.classList.remove("hide") // Remove the hidden class.
        counter++; // Increment the counter
    }, 500)

    // One in five chance of running nav bar animation
    if (Math.floor(Math.random() * 5) == 0) {
        runAnimation()
        console.log("Random animation run.")
    }

}

setInterval(() => {

    update() // Update when the loop runs

}, time) // Run every {time} milliseconds.

update() // Update at startup

// Animate the nav bar on the home page

let navButtons = []

const addClass = (element) => {
    element.classList.add("selected")
}

const removeClass = (element) => {
    element.classList.remove("selected")
}

var elements = document.getElementsByClassName("animate");
for(var x=0; x < elements.length; x++)
{
    navButtons.push(elements[x])
}

let navCounter
let mode 
let interval

const runAnimation = () => {
    navCounter = 0
    mode = 0
    interval = setInterval(() => {
        if (mode == 0) {
            addClass(navButtons[navCounter])
        }else {
            removeClass(navButtons[navCounter])
        }
        navCounter++
        if (navCounter == navButtons.length) {
            if (mode == 0) {
                mode = 1
                navCounter = 0
            }else {
                clearInterval(interval)
            }
        }
    }, 100)
}

runAnimation()