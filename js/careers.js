/*
    Careers page manager for HBWS (Unit 15 Assignment 2)
    Cameron Fleming | 20182242
*/

// This script makes references to helpers defined in main.js
// Mainly "get" which aliases document.getElementById()

let currentlyOpened = "" // Used to store the ID of the currently opened modal

const showInformationPane = (paneID) => {
    // Expects paneID to be a valid HTML ID
    dom = get(paneID)
    if (dom.style.display != "block") {
        dom.style.display = "block"
        currentlyOpened = paneID
    }else {
        dom.style.display = "none"
    }
}


window.onclick = function(event) {
    if (event.target == get(currentlyOpened)) {
        get(currentlyOpened).style.display = "none";
    }
}