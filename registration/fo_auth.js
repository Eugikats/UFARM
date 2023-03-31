// const Validate = () => {
   /* // Get form inputs
    const usernameInput = document.getElementById("username");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const otherNamesInput = document.getElementById("other-names");
    const NINInput = document.getElementById("NIN");
    
    // Get error message elements
    const usernameError = document.getElementById("usernameErr");
    const firstNameError = document.getElementById("fnameErr");
    const lastNameError = document.getElementById("lnameErr");
    const otherNamesError = document.getElementById("onameErr");
    const NINError = document.getElementById("ninErr");
    
    // Check if inputs are empty
    if (usernameInput.value === "" || firstNameInput.value === "" || lastNameInput.value === "" || NINInput.value === "") {
      alert("Form cannot be submitted empty!");
      return false;
    }
    
    // Validate username
    if (!/^[a-zA-Z0-9]+$/.test(usernameInput.value)) {
      usernameInput.style.borderColor = "red";
      usernameError.textContent = "Username must be alphanumeric";
      return false;
    }
    
    // Validate first name
    if (!/^[a-zA-Z]{5,10}$/.test(firstNameInput.value)) {
      firstNameInput.style.borderColor = "red";
      firstNameError.textContent = "First name must be a string between 5 and 10 characters";
      return false;
    }
    
    // Validate last name
    if (!/^[a-zA-Z]{5,10}$/.test(lastNameInput.value)) {
      lastNameInput.style.borderColor = "red";
      lastNameError.textContent = "Last name must be a string between 5 and 10 characters";
      return false;
    }
    
    // Validate other names
    if (otherNamesInput.value !== "" && !/^[a-zA-Z]{5,10}$/.test(otherNamesInput.value)) {
      otherNamesInput.style.borderColor = "red";
      otherNamesError.textContent = "Other names must be a string between 5 and 10 characters";
      return false;
    }
    
    // Validate NIN
    if (!/^[a-zA-Z0-9]{13}$/.test(NINInput.value)) {
      NINInput.style.borderColor = "red";
      NINError.textContent = "NIN must be 13 alphanumeric characters";
      return false;
    }
    
    // All inputs are valid, return true to submit form
    return true;
  }
  */
 
  const Validate = () => {
    // picking input fields and their names
    let firstName = document.register.firstname
    let lastName = document.register.lastname
    let uniqueno = document.register.uniquenumber
    let password = document.getElementById("password")

    //pick error sections
    let firstNameError = document.getElementById("fnameErr")
    let lastNameError = document.getElementById("lnameErr")
    let uniquenoError = document.getElementById("uniquenoErr")
    let passError = document.getElementById("passErr")

    // validating first name emptiness
    if(firstName.value==""){
      firstName.style.border = "1px solid red"
      firstNameError.innerHTML = "Please, first name can not be empty"
      firstNameError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      firstName.focus()
      return false;
    }
    // validating first name min length
    else if(firstName.value.length < 5) {
      firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please the first name must be atleast 5 letters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
    }
    // validating firstname max length
    else if(firstName.value.length > 50) {
      firstName.style.border = "1px solid red"
      firstNameError.innerHTML = "First Name must be below 50 characters"
      firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    } else{
      firstName.style.border = "1px solid green"
      firstNameError.innerHTML = ""
      lastName.focus()
    }

    //validating last name emptiness
    if(lastName.value == ""){
      lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please last name can not be empty"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    }
    // validating last name min length
    else if(lastName.value.length < 5)
    {
      lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please the last name must be atleast 5 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    }
    // validating last name for maximum length
    else if(lastName.value.length > 50){
      lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please the last name must be less than 50 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        return false;
    }
   else{
    lastName.style.border = "1px solid green"
    lastNameError.innerHTML = ""
    uniqueno.focus()
  }

    //unique number verifications
    const foregex = /^FO-([0-9]{3})+$/;
    if(uniqueno.value == "") {
      uniqueno.style.border = "1px solid red"
      uniquenoError.textContent = "Unique number is required";
      uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else if(!(uniqueno.value.match(foregex))){
      uniqueno.style.border = "1px solid red"
      uniquenoError.textContent = "Unique number must follow this formart AO-000";
      uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }else {
      uniqueno.style.border = "1px solid green"
      uniquenoError.textContent = "";
      password.focus()
    }

    //password validation
    const passregex = /^[A-Za-z]\w{7,14}$/;
    if(password.value == "")  {
      password.style.border = "1px solid red"
      passError.textContent = "Password is required";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else if (!(password.value.match(passregex))) {
      password.style.border = "1px solid red"
      passError.textContent = "Password must start with letters then end with numbers"
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else if(password.value.length > 15) {
      password.style.border = "1px solid red"
      passError.textContent = "Please the password must not be more than 15 characters";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      return false;
    }
    else {
      password.style.border = "1px solid green"
      passError.textContent= "";
    }

    return true;
  }
  