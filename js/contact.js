/*
    HBWS Contact us Handler
    By Cameron Fleming 20182242@lmc.ac.uk
*/

const urlParams = new URLSearchParams(window.location.search);
const firstname = urlParams.get('firstname');
const lastname = urlParams.get('lastname');
const email = urlParams.get('email');
const message = urlParams.get('message');


if (firstname != undefined) {
    // Only defined when there is data.
    document.getElementById("contact-form").hidden = true // Remove contact form
    let text = document.getElementById("form-thanks-message").innerHTML
    dataSet = {
        "first_name": firstname,
        "last_name": lastname,
        "email_address": email,
        "message": message
    }
    // Find placeholders & replace them in the message
    let inPlaceholder = false // Set to true if the cursor is in a placeholder
    let placeholderString = ""
    for (let i=0; i < text.length; i++) { // Increment the cursor position
        if (text[i] == "]" && inPlaceholder) {
            inPlaceholder = false
            // Replace the placeholder
            //text.replace(placeholderString,  "big peen")
            text = text.replace("[" + placeholderString + "]", dataSet[placeholderString])
            // Reset the placeholderString
            placeholderString = ""
            console.log("Exited placeholder")
        }      
        if (inPlaceholder) {
            placeholderString += text[i]
            console.log("Appending " + text[i])
        }
        if (text[i] == "[" && !inPlaceholder) {
            inPlaceholder = true
            console.log("Now in placeholder")
        }
    } 
    // All done replacing placeholders, update the element
    document.getElementById("form-thanks-message").innerHTML = text    
    document.getElementById("form-thanks-message").hidden = false
}