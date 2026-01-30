const stars = document.querySelectorAll('.fa-star')
const emojis = document.querySelectorAll('.fa-regular');

stars.forEach((star,index) => {
    star.addEventListener('click',()=>{
        updateRating(index);
    });
});

function updateRating(index){

    stars.forEach((star,i) =>{
        if(i<=index){
            star.classList.add('active');
        }
        else{
            star.classList.remove('active')
        }
    });

    emojis.forEach((emoji)=>{
        emoji.style.transform = `translateX(-${index * 50}px)`;
    })
}