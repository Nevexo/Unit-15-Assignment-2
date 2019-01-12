// By Cameron Fleming - 20182242 (2019)

// JS used by the welcome page to change the highlighted section

// Words to use
const words = [
    "develop",
    "design",
    "innovate",
    "change",
    "rethink"
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
    if (counter >= words.length) {
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

}

setInterval(() => {

    update() // Update when the loop runs

}, time) // Run every {time} milliseconds.

update() // Update at startup