let overlay = document.createElement('div')
let popup = document.createElement('div')
let closeButton = document.createElement('div')
let h2 = document.createElement('h2')
let form = document.createElement('form')
let name = document.createElement('input')
let password = document.createElement('input')
let confirmPassword = document.createElement('input')
let email = document.createElement('input')
let submitButton = document.createElement('input')
let dialogBox = document.createElement('div')
let dialogMessage = document.createElement('p')

overlay.setAttribute('class', 'overlay')
popup.setAttribute('class', 'popup')
closeButton.setAttribute('id', 'close-button')
form.setAttribute('method', 'post')
form.setAttribute('id', 'form')
name.setAttribute('type', 'text')
password.setAttribute('type', 'password')
confirmPassword.setAttribute('type', 'password')
email.setAttribute('type', 'email')
submitButton.setAttribute('type', 'submit')
name.setAttribute('placeholder', 'Your name')
password.setAttribute('placeholder', 'Password')
confirmPassword.setAttribute('placeholder', 'Confirm password')
email.setAttribute('placeholder', 'E-mail')
submitButton.setAttribute('value', 'send')
submitButton.setAttribute('id', 'submitButton')
dialogBox.setAttribute('id', 'dialog-box')
h2.innerHTML='Create account'
dialogMessage.innerHTML='😄 Message sent'
closeButton.innerHTML='[X]CLOSE'


document.querySelector('#contact-button').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('body').appendChild(overlay)
    document.querySelector('.overlay').appendChild(dialogBox)
    document.querySelector('#dialog-box').appendChild(dialogMessage)    
    setTimeout((e) => { 
        document.querySelector('.overlay').remove()
    }, 2000)


})

document.querySelector('#register-button').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('body').appendChild(overlay)
    document.querySelector('.overlay').appendChild(popup)
    document.querySelector('.popup').appendChild(closeButton)
    document.querySelector('.popup').appendChild(h2)
    document.querySelector('.popup').appendChild(form)
    document.querySelector('#form').appendChild(name)
    document.querySelector('#form').appendChild(email)
    document.querySelector('#form').appendChild(password)
    document.querySelector('#form').appendChild(confirmPassword)
    document.querySelector('#form').appendChild(submitButton)
   
    document.querySelector('#close-button').addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.overlay').remove()
    })

})

document.querySelector('#login-button').addEventListener('click', (e) => {
   e.preventDefault()
   h2.innerHTML='Log in'
   document.querySelector('body').appendChild(overlay)
   document.querySelector('.overlay').appendChild(popup)
   document.querySelector('.popup').appendChild(closeButton)
   document.querySelector('.popup').appendChild(h2)
   document.querySelector('.popup').appendChild(form)
   document.querySelector('#form').appendChild(email)
   document.querySelector('#form').appendChild(password)
   document.querySelector('#form').appendChild(submitButton)

   document.querySelector('#close-button').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.overlay').remove()
   })

})

