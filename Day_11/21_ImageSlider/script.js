const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev')
const imgContainer = document.querySelector('.image-container');
const allImg = document.querySelectorAll('img')


let currentImg = 1;

let interval;

changeImg();

function changeImg() {
    if (currentImg > allImg.length) {
        currentImg = 1;
    }
    else if(currentImg < 1){
        currentImg = allImg.length;
    }
    imgContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

    clearInterval(interval)

    interval = setInterval(()=>{
        currentImg++;
        changeImg();
    },2000)
}

nextBtn.addEventListener('click', () => {
    currentImg++
    clearInterval(interval)
    changeImg();
})


prevBtn.addEventListener('click', ()=>{
    currentImg--;
    clearInterval(interval)
    changeImg();
})