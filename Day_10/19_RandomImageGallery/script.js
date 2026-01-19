const loadBtn = document.querySelector('.btn');
const imgContainer = document.querySelector('.image-container')

function addNewImg(){
    for (let i = 0; i < 3; i++) {
        const newimg = document.createElement('img');
        randomNum = Math.floor(Math.random()*2000)
        newimg.src = `https://picsum.photos/300?random=${randomNum}`
        imgContainer.appendChild(newimg);
    }
}

loadBtn.addEventListener('click',addNewImg);