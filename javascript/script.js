
emailjs.init({ publicKey: "FbDJsBJytZWItwXwq" });
const FORM = document.querySelector("#contact-form");

FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    // ensure all dropwn fields have a value
    Array.from(FORM.elements).forEach(field => {
        if (field.value === "") field.classList.add('is-invalid');
        else field.classList.remove('is-invalid');
    });
    
    let invalidFields = Array.from(FORM.elements).filter(field => field.classList.contains('is-invalid'));
    // document.getElementById("button").classList.remove('is-invalid');
    if (invalidFields.length > 1) {
        console.log(invalidFields);
        // scroll to the first invalid field
        invalidFields[0].focus();
        return;
    }
    
    // check if the email field is valid
    let emailField = FORM.elements['email'];
    if (!validEmail(emailField.value)) {
        emailField.classList.add('is-invalid');
        emailField.focus();
        return;
    } else {
        emailField.classList.remove('is-invalid');
    }
    // if there are no invalid fields, submit the form
    Array.from(FORM.elements).forEach(field => {
        field.classList.remove('is-invalid');
    });
    let name = FORM.elements['name'].value;
    alert(`We've got your message ${name}! We'll be in touch soon.`);
    confirmSubmission()
    FORM.reset();
});

function validEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function confirmSubmission() {
    let params = {
        name: FORM.elements['name'].value,
        surname: FORM.elements['surname'].value,
        email: FORM.elements['email'].value,
        message: FORM.elements['message'].value
    }
    emailjs.send("service_6kntx8c", "template_23etmt9", params)
}