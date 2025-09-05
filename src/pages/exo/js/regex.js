
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const message = document.querySelector("#message")



const mailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;


email.addEventListener("keyup", (event) => {

    let isValid = mailRegex.test(event.target.value)

    email.style.backgroundColor = isValid ? "green" : "red" 


})

password.addEventListener("keyup", (event) => { 

    let charSpecial = /[9$&@!]/
    let charDecimal = /[0-9]/ 


    
    message.innerText = ""
     if(!event.target.value.match(charSpecial) || !event.target.value.match(charDecimal) || !(event.target.value.length >= 6 && event.target.value.length <= 8)) {
        message.innerText = "Le mot de passe doit :"
        message.appendChild(document.createElement("ul"))
        message.style.border = "1px solid red"
        message.style.padding = "10px"

    }else {
        message.style.border = "1px solid green"
        message.innerText += "Mot de passe valide"

    }
    
    if(!event.target.value.match(charSpecial)) {
        let li = document.createElement("li")
        li.innerText += "doit contenir un caractère spécial"
        message.appendChild(li)

    }
     if(!event.target.value.match(charDecimal)) {
        let li = document.createElement("li")
        li.innerText += "doit contenir un chiffre"
        message.appendChild(li)
    }
     if(!(event.target.value.length >= 6 && event.target.value.length <= 8)) {
        let li = document.createElement("li")
        li.innerText += "doit contenir entre 6 et 8 caractères"
        message.appendChild(li)
    }

})

