// username section
let userNameElement = document.getElementById("username")
userNameElement.innerHTML = `
<p>Username:</p>
<p id="requiredUsername" class="required"></p>`

// password section
let passwordElement = document.getElementById("password")
passwordElement.innerHTML = `
<p>Password:</p>
<p id="requiredPassword" class="required"></p>`

// confirm password section
let confirmPasswordElement = document.getElementById("confirm__password")
confirmPasswordElement.innerHTML = `
<p>Confirm password:</p>
<p id="requiredConfirmPassword" class="required"></p>`


let data = {
    Ahmad: "123456",
    munib: "654321"
}


function isEmpty(){
    let userInput = document.querySelector(".username").value
    let passwordInput = document.querySelector(".password").value
    let passwordConfirmInput = document.querySelector(".confirm__password").value
    let requiredUserName = document.getElementById("requiredUsername")
    let requiredPassword = document.getElementById("requiredPassword")
    let requiredConfirmPassword = document.getElementById("requiredConfirmPassword")

    if (userInput == ""){
        requiredUserName.textContent = "*required"
    }
    else{
        requiredUserName.textContent = ""
    }
    if (passwordInput == ""){
        requiredPassword.textContent = "*required"
    }
    else{
        requiredPassword.textContent = ""
    }
    if (passwordConfirmInput == ""){
        requiredConfirmPassword.textContent = "*required"
    }
    else{
        requiredConfirmPassword.textContent = ""
    }
    if (userInput != "" && passwordInput != "" && passwordConfirmInput != ""){
        let passwordValue = false
        for (let i of Object.keys(data)){
            if (userInput==i && passwordInput==data[i]){
                if (passwordInput===passwordConfirmInput){
                    passwordValue = true
                }
                else{
                    alert("Passwords didn't match")
                    return
                }
                
            }
        }
        if (passwordValue==true){
            alert("Welcome to the website!")
        }
        else{
            alert("Wrong password, please try again")
        }
    }

}


// Exercise 04
// Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input
// fields. Once they have, the registration button should then be enabled.
// *has not achieved*
