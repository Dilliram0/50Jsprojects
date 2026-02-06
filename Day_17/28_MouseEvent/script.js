const positionX = document.querySelector('#mouseX');
const positionY = document.querySelector('#mouseY')

window.addEventListener("mousemove",(event)=>{
    positionX.innerHTML = event.screenX;
    positionY.innerHTML = event.screenY;
})