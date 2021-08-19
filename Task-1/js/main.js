document.addEventListener(`DOMContentLoaded`, () => {
    `use strict`;
    const loginForm = document.querySelector(".form-login");
    const regForm = document.querySelector(".form-registration");
    const regExpName = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
    const regExpNameEmail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    const redExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    //проверка login form
    const validateElement = (elem) => {
        if(elem.name === `name`){
            if(!regExpName.test(elem.value) && elem.value !== ""){
                elem.nextElementSibling.innerText = `Please, enter a correct user name!`;
                elem.nextElementSibling.classList.remove("hidden");
                elem.classList.add("error");
                elem.value = "";
            } else if(elem.value == ""){
                elem.classList.remove("error");
                elem.classList.remove("correct");
                elem.nextElementSibling.classList.add("hidden");
            } else {
                elem.nextElementSibling.classList.add("hidden");
                elem.classList.add("correct");
            }
        }
        if(elem.name === `password`){
            if(!redExpPassword.test(elem.value) && elem.value !== ""){
                elem.nextElementSibling.innerText = `Passwrd must have at least one digit, one lower and one upper case letter`;
                elem.nextElementSibling.classList.remove("hidden");
                elem.classList.add("error");
                elem.value = "";
            } else if(elem.value == ""){
                elem.nextElementSibling.classList.add("hidden");
                elem.classList.remove("error");
                elem.classList.remove("correct");
            } else {
                elem.nextElementSibling.classList.add("hidden");
                elem.classList.add("correct");
            }
        }
        if(elem.name === `email`){
            if(!regExpNameEmail.test(elem.value) && elem.value !== ""){
                elem.nextElementSibling.innerText = `Enter a correct email`;
                elem.nextElementSibling.classList.remove("hidden");
                elem.classList.add("error");
            } else if(elem.value == ""){
                elem.nextElementSibling.classList.add("hidden");
                elem.classList.remove("error");
                elem.classList.remove("correct");
            } else {
                elem.nextElementSibling.classList.add("hidden");
                elem.classList.add("correct");
            }
        }
    }
    
    for(let elem of loginForm.elements){
        if(!elem.classList.contains(`login-checkbox`) && elem.tagName !== `BUTTON` && elem.tagName !== `FIELDSET`){
            elem.addEventListener(`blur`, () => {
                validateElement(elem);
            });
        }
    }
    for(let elem of regForm.elements){
        if(elem.tagName !== `BUTTON` && elem.tagName !== `FIELDSET`){
            elem.addEventListener(`blur`, () => {
                validateElement(elem);
            });
        }
    }

    loginForm.addEventListener(`submit`, (e) => {
        e.preventDefault();
        for(let elem of loginForm.elements){
            if(!elem.classList.contains(`login-checkbox`) && elem.tagName !== `BUTTON` && elem.tagName !== `FIELDSET`){
                if( elem.value === ``){
                    elem.nextElementSibling.classList.remove("hidden");
                }
            }
        }
    })
    regForm.addEventListener(`submit`, (e) => {
        e.preventDefault();
        for(let elem of regForm.elements){
            if(!elem.classList.contains(`login-checkbox`) && elem.tagName !== `BUTTON` && elem.tagName !== `FIELDSET`){
                if( elem.value === ``){
                    elem.nextElementSibling.classList.remove("hidden");
                }
            }
        }
    })
})