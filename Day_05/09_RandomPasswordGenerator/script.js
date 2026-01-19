const button = document.querySelector('#btn')
const input = document.querySelector('#input')

function generatePassword(){
    let length = 12;

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    let password = "";

    for(let i = 1; i <= length; i++){
        const randomIndex = Math.floor(Math.random()*charset.length);
        password += charset[randomIndex];
        input.value = password;
    }
}


button.addEventListener('click',generatePassword)