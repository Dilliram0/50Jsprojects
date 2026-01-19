const calculateBtn = document.querySelector('#calculate');
const userAge = document.querySelector('#userDate')
const age = document.querySelector('#age')


function calculateAge(){
    const givenYear = parseInt(userAge.value.split("-")[0])
    // eg: 2025-04-24 => splits "-" it into array and prints index
    console.log(givenYear)
    
    const currentYear = new Date().toLocaleDateString();
    const currentDob = parseInt(currentYear.split("/")[2]);
    console.log(currentDob)

    const bruh = currentDob - givenYear;
    console.log(bruh);
    age.innerHTML = `Your age is ${bruh} years old`
}


calculateBtn.addEventListener('click',calculateAge)