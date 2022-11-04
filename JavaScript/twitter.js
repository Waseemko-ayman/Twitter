
let input = document.getElementById("blur");

window.onload = function () {
    input.focus();
};


function redirectMe(url) {
    window.location = url;
}


// let email = document.querySelector(".email");
// let button = document.querySelector(".button");

// document.forms.onsubmit = function (e) {
//     let emailValid = false;

//     if (emailInput.value !== "") {
//         emailValid = true;
//     }

//     if (emailValid === false) {
//         e.preventDefault();
//     }
// };

// let button = document.querySelector(".next");


// let userInput = document.querySelector(`[name="username"]`);
// let phoneInput = document.querySelector(`[name="phone"]`);

// document.forms.onsubmit = function (e) {
//     let userValid = false;
//     let phoneValid = false;

//     if (userInput.value !== "" || userInput.value.length <= 15) {
//         userValid = true;
//     }

//     if (phoneInput.value !== "") {
//         phoneValid = true;
//     }

//     if (userValid === false || phoneValid === false) {
//         e.preventDefault();
//     }
// };