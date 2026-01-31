const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev')
const allSteps = document.querySelectorAll('.step');
const greenBar = document.querySelector('.progress-bar-front');

let currentChecked = 1;

nextBtn.addEventListener('click', () => {
    currentChecked++;

    if (currentChecked > allSteps.length) {
        currentChecked = allSteps.length;
    }
    updateStepProgress();


});
prevBtn.addEventListener('click', () => {
    currentChecked--;

    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updateStepProgress();


});

function updateStepProgress() {
    allSteps.forEach((step, index) => {
        if (index < currentChecked) {
            step.classList.add('checked');
            step.innerHTML = `
                <i class="fa-solid fa-check"></i>
                <small>
                    ${index === 0 ? "Start" : index === allSteps.length - 1 ? "Final" : "Step " + index}
                </small>
            `;
        }
        else {
            step.classList.remove('checked');
            step.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

        }
    });


    const checkedNumber = document.querySelectorAll('.checked');
    
    greenBar.style.width = ((checkedNumber.length - 1) / (allSteps.length - 1)) * 100 + "%";

    if(currentChecked === 1){
        prevBtn.disabled = true;
    }
    else if(currentChecked === allSteps.length){
        nextBtn.disabled = true;
    }else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

}

