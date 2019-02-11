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

}