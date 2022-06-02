const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector(".feedback-form")
const localData = {}
const { elements: { email, message } } = feedbackForm


const dataInput = function (event) {
    localData.email = email.value
    localData.message = message.value
    const localDataJSON = JSON.stringify(localData)
    localStorage.setItem("feedback-form-state", localDataJSON)
}

const dataSubmit = function (event) {
    event.preventDefault();
    console.log({ email: email.value, message: message.value })
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
}

feedbackForm.addEventListener("input", throttle(dataInput, 500))
feedbackForm.addEventListener("submit", dataSubmit)

if (localStorage.getItem("feedback-form-state")) {
    
    try {
        const localHost = JSON.parse(localStorage.getItem("feedback-form-state"))
        email.value = localHost.email
        message.value = localHost.message
    } catch {
        console.error("parse error")
    }
}
