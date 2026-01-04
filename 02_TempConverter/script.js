const celcius = document.querySelector('#celcius');
const fahren = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');
const convert = document.querySelector('#convert');
const resetBtn = document.querySelector('#reset');


function convertTemp(){

        if(celcius.value !== ""){
            let c = parseFloat(celcius.value)
            fahren.value = (c* 9/5) + 32;
            console.log(fahren.value)
            kelvin.value = parseInt(c + 273);
        }
        else if ( fahren.value !== ""){
            let f = parseFloat(fahren.value);
            celcius.value = ( f - 32 ) * 5/9;
            kelvin.value = ( f - 32 ) * 5/9 + 273;
        }
        else{
            let k = parseFloat(kelvin.value);
            celcius.value = k - 273;
            fahren.value = ( k - 273 ) * 9/5 + 32;
        }

}

convert.addEventListener('click',convertTemp)

function resetAll(){
    celcius.value = "";
    fahren.value = "";
    kelvin.value = "";
}

resetBtn.addEventListener('click',resetAll)