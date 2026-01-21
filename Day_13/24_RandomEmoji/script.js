const btnEl = document.querySelector('#btn');
const emojiName = document.querySelector('#emoji-name')

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=a934be7f4ae9c1dd6e6d935bfea1aaca1469384b")
    let data = await response.json();

    for(i=1;i<=1000;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        })
    }
    
}


console.log(emoji)

getEmoji()

btnEl.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random()*emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiName.innerText = emoji[randomNum].emojiCode;
})