import Lodash from 'lodash.throttle';

const form = document.querySelector(".feedback-form");



form.addEventListener("input", Lodash(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);


function onFormInput(e) {
    localStorage.setItem("feedback-form-state", JSON.stringify({
        email: `${form.elements.email.value}`,
        message: `${form.elements.message.value}`,
    }));


}


function onFormSubmit(e) {

    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    localStorage.removeItem("feedback-form-state");
    
    if (form.elements.email.value || form.elements.message.value) {
        e.currentTarget.reset();
    }
}
