const container = document.querySelector('.container');



for (let i = 0; i < 30; i++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add('color-container');
    container.appendChild(colorContainer);   
        
}

const colorContainers = document.querySelectorAll('.color-container');


function generateColor(){
    colorContainers.forEach((colorBox)=>{
        const newColor = randomColor();
        colorBox.style.backgroundColor = "#"+ newColor;
        colorBox.innerHTML = `#${newColor}`
        // console.log(newColor)
    })
}

generateColor()

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random()*chars.length);
        color += chars[randomNum];
        
    }
            return color;

}

randomColor();