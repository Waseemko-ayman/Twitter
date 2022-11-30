
let input = document.getElementById("blur");

window.onload = function () {
    input.focus();
};

input.onblur = function () {
    if (input.value !== "") {
        phone.focus();
    }
}


function redirectMe(url) {
    window.location = url;
}

///////////////////////////////////////////////////

// In Login-1.html

let link = document.getElementById("convert");
let phone = document.getElementById("phone");

link.onclick = function () {
    if (link.innerHTML === "Use e-mail from it") {
        phone.setAttribute("placeholder", "Your Email");
        phone.setAttribute("type", "email");
        link.innerHTML = "Use phone from it";
    } 
    else if (link.innerHTML === "Use phone from it") {
        phone.setAttribute("placeholder", "Your Phone");
        phone.setAttribute("type", "phone");
        link.innerHTML = "Use e-mail from it";
    }
}

let registers = document.getElementById("register");
registers.onclick = function () {
    window.alert("Are you sure you want to register??");
}


///////////////////////////////////////////////////

// let yorAge = document.querySelector("#age");
// let button = document.querySelector("#submit");

// button.onclick = function () {
//     function ages(yorAge) {
//         if (yorAge.value < 17) {
//             window.alert("Dear !! You are too young, sorry you cannot login to this site");
//         } else {
//             window.alert("our end !! You can login to this site");
//         }
//     }
//     ages(yorAge);
// }

///////////////////////////////////////////////////

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