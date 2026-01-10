const kgWeight = document.querySelector('#kgWeight');
const pound = document.querySelector('#pound')
const errMsg = document.querySelector('#msg')


kgWeight.addEventListener('input',()=>{
    
    const kg = parseFloat(kgWeight.value);

    errMsg.textContent = "";
    pound.textContent = "";

    if(kg === ''){
        return;
    }

    if(isNaN(kg)){
        errMsg.textContent = "Please Enter a valid Number!!!";
        return;
    }

    if(kg <= 0){
        errMsg.textContent = "Please enter weight above 0";
        return;
    }

    let pounds = kg * 2.20462;
    pound.innerHTML = pounds.toFixed(2);

})
