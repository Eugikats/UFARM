const Validate = (event) => {
let error = 0
 // pick inputs
 let firstName = document.getElementById("fname");
 let lastName = document.getElementById("lname")
 let uniqueno = document.getElementById("uniquenumber")
 let password = document.getElementById("password");

//pick error sections
let firstNameError = document.getElementById("fnameErr")
let lastNameError = document.getElementById("lnameErr")
let uniquenoError = document.getElementById("uniquenoErr")
let passError = document.getElementById("passErr");


// validating first name input emptiness
if(firstName.value == ""){
    firstName.style.border = "1px solid red"
    firstNameError.innerHTML = "Please first name can not be empty"
    firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
 // validating first name for minimum length
else if(firstName.value.length < 3){
    firstName.style.border = "1px solid red"
    firstNameError.innerHTML = "Please the first name must be atleast 3 letters"
    firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
// validating first name for maximum length
else if(firstName.value.length > 11){
    firstName.style.border = "1px solid red"
    firstNameError.innerHTML = "Please the first name must be less than 11 letters"
    firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
} else {
    firstName.style.border = "1px solid green"
    firstNameError.innerHTML = ""
}


// validating last name input emptiness
if(lastName.value == ""){
    lastName.style.border = "2px solid red"
    lastNameError.innerHTML = "Please last name can not be empty"
    lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
 // validating last name for minimum length
else if(lastName.value.length < 3){
    lastName.style.border = "2px solid red"
    lastNameError.innerHTML = "Please the last name must be atleast 3 letters"
    lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}
// validating last name for maximum length
else if(lastName.value.length > 11){
    lastName.style.border = "2px solid red"
    lastNameError.innerHTML = "Please the last name must be less than 11 letters"
    lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    error++
}



// unique number validations
const foregex = /^FO-([0-9]{3})+$/
 if (uniqueno.value == "") {
      uniqueno.style.border = "1px solid red"
      uniquenoError.textContent = "Unique number is required";
      uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }else if(!(uniqueno.value.match(foregex))){
      uniqueno.style.border = "1px solid red"
      uniquenoError.textContent = "Unique number must follow this formart AO-000";
      uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }else {
      uniqueno.style.border = "1px solid green"
      uniquenoError.textContent = "";
    }



    const passregex=  /^[A-Za-z]\w{7,14}$/;
    if (password.value == "") {
      password.style.border = "1px solid red"
      passError.textContent = "Password is required";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }
    else if (!(password.value.match(passregex))) {
      password.style.border = "1px solid red"
      passError.textContent = "Password must be alphanumeric";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }
    else if (password.value.length < 5) {
      password.style.border = "1px solid red"
      passError.textContent = "Please the password must be atleast 5 characters";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }else if (password.value.length > 15) {
      password.style.border = "1px solid red"
      passError.textContent = "Please the password must not be more than 15 characters";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }
    else {
      password.style.border = "1px solid green"
      passError.textContent = "";
    }


    if(error > 0){
        event.preventDefault()
    }
}