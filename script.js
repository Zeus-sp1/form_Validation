const form = document.getElementById('form')
const username = document.getElementById('user-section')
const phone = document.getElementById('phone')
const password = document.getElementById('secret-key')
const email = document.getElementById('email-section')
const passwordTwo = document.getElementById('cfm-secret-key')
const options = document.getElementById('gender')

form.addEventListener('submit', (e) => {
       e.preventDefault();

       checkInput();
});

function checkInput() {
       let user = username.value.trim();
       let phoneInput = phone.value.trim();
       let passwordInput = password.value.trim();
       let emailInput = email.value.trim();
       let confirmInput = passwordTwo.value.trim();
       let genderInput = options.value;

       if (user === '') {
              //show error function below
              setErrorFor(username, 'Username cannot be blank');
       } else {
              // add success class
              setSucess(username);
       }     
       if (emailInput === '') {
              setErrorFor(email, 'email cannot be empty');
       } else if (!isEmail(emailInput)) {
              setErrorFor(email, 'email is not valid');
       } else {
              setSucess(email);
       }
       if (phoneInput === '') {
              setErrorFor(phone, 'phone number cannot be blank');
       } else if (phoneInput.length < 11) {
              setErrorFor(phone, 'please include numbers only and it should\'nt be more than 11  ');
       } else {
              setSucess(phone);
       }
       if (passwordInput === '') {
              setErrorFor(password, 'password cannot be blank');
       } else {
              setSucess(password);
       }
       if  (confirmInput === '') {
              setErrorFor(passwordTwo, 'please retype your password');
       } else if (passwordInput !== confirmInput) {
              setErrorFor(passwordTwo, 'password does not match');
       } else {
              setSucess(passwordTwo);
       }
       if (genderInput === '') {
              setErrorFor(options, 'please select gender')
       } else {
              setSucess(options);
       }
}      
function setErrorFor(input, message) {
       const formControl = input.parentElement; //input-section class
       const messageText = formControl.querySelector('p');
       // adding error message inside messageText
       messageText.innerText = message;
       messageText.className = 'error';
}
 function setSucess(input) {
       const formControl = input.parentElement; //input-section class
       const messageText = formControl.querySelector('p');
       // adding error message inside messageText
       messageText.className = 'success';
 }
 function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }
 function numberOnly(phone) {
        return /^\d*\.?\d*$/.test(phone);
 }
 
 //visibilty design
const vissibilityBtn = document.getElementById('visibility')
vissibilityBtn.addEventListener('click', showPassword);

function showPassword() {
       const passwordInput = document.getElementById('secret-key');
       const invissibleIcon = document.getElementById('icon');
       if (passwordInput.type === "password") {
              passwordInput.type = "text";
              invissibleIcon.innerText = "visibility_off"
       } else {
              passwordInput.type = "password";
              invissibleIcon.innerText = "visibility"
       }
}
 
 
 
 
 
 document.querySelector('.hb-btn').addEventListener('click', function() {
        document.querySelector('#ctn-nav-btn').style.display = 'block';
        document.querySelector('.hb-btn').style.display = 'none';
        document.querySelector('.close').style.display = 'block';
 });
 document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('#ctn-nav-btn').style.display = 'none';
        document.querySelector('.hb-btn').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
 })

