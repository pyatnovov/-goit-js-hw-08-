import Lodash from 'lodash.throttle';
const localStorageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;




form.addEventListener("input", Lodash(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);


function onFormInput() {
    const formData = {
        email: `${form.elements.email.value}`,
        message: `${form.elements.message.value}`,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}


function onFormSubmit(e) {
    e.preventDefault();
    if (!email.value || !message.value) {
        return;
    };
    console.log({email: email.value, message: message.value});
    form.reset();
    localStorage.removeItem(localStorageKey);
}

function onPageLoading() {
    const parsedData = JSON.parse(localStorage.getItem(localStorageKey));
    
    if (!email.value) return;

    email.value = parsedData.email;
    message.value = parsedData.message;
    
}