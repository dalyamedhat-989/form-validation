const form = document.querySelector('form')
const inputs = document.querySelectorAll(".req");

//selector .event = action
form.onsubmit = (event) => {
    event.preventDefault(); // if any field is empty
}