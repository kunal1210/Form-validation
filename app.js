const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



// check email is valid 

function checkEmail(input){
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (re.test(input.value.trim())){
showSuccess(input)

}else{
  showError(input,'Email is not  valid')

}

}
// show input error message 

function showError(input,message){

const formControl =input.parentElement;
formControl.className = 'form-control error';
const samll =  formControl.querySelector('small')
samll.innerText = message;

}

// show succes outline

function showSuccess(input){

const formControl = input.parentElement;
formControl.className = 'form-control success';
}

function checkRequired(inputArr){

inputArr.forEach(function(input){

if(input.value.trim()=== '')  {
showError(input,`${getFieldName(input)} is required`)

}
else{
showSuccess(input)

}
})

}

// check passwords matches

function checkPasswordsMatch(input1,input2){


     if(input1.value!== input2.value){


    showError(input2,'passwords do not match')
     }

}

// check input lenght 

function checkLenght(input,min,max){

if(input.value.length < min){
    showError(input,`${getFieldName(input)} must be at least ${min} characters`)
}
else if (input.value.length>max)
{
    showError(input,`${getFieldName(input)} must be less than ${max} characters`)

}
else{
showSuccess(input)

}

}


// get field name 

function getFieldName(input){

return input.id.charAt(0).toLowerCase() + input.id.slice(1);

}

// Event Listner 
form.addEventListener('submit',function(e){
e.preventDefault();

checkRequired([username,email,password,password2]);
checkLenght(username,3,15);
checkLenght(password,6,25);
checkEmail(email);
checkPasswordsMatch(password,password2)
})