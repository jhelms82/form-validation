const form = document.getElementById('form');
const pass1El = document.getElementById('password1');
const pass2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

let passwordsMatch = false;

function validateForm(){
    //Using Contraint API
    isValid = form.checkValidity();
    
    //Styel main message for error
    if(!isValid){
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
    }

    //Check to see if password Match
    if(pass1El.value === pass2El.value){
        passwordsMatch = true;
        pass1El.style.borderColor = 'green';
        pass2El.style.borderColor = 'green';

    }else {
        passwordsMatch = false;
        message.textContent = ' Make sure passwords match. '
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        pass1El.style.borderColor = 'red';
        pass2El.style.borderColor = 'red';
        return;

    }

    //If form is valid and passwods match
    if(isValid && passwordsMatch){
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }

}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    //Do something with user data
    console.log(user);
}
//Event Listener
function processFormData(e){
    e.preventDefault();
   //Validate Form
   validateForm();
   //Submit Data if valid
   if(isValid && passwordsMatch){
    storeFormData();
   }
}

form.addEventListener('submit', processFormData)