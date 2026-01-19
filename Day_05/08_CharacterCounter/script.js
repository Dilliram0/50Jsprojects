const textArea = document.querySelector('#textarea');
const totalCounter = document.querySelector('#total-counter');
const remainingCounter = document.querySelector('#remaining-counter');

totalCounter.innerHTML = 0;
remainingCounter.innerHTML = 50;

let characterLength;

textArea.addEventListener('input',(e)=>{
    characterLength = (textArea.value.length);
    totalCounter.innerHTML = characterLength;
    remainingCounter.innerHTML = 50 - characterLength;

    console.log(e.key)
})