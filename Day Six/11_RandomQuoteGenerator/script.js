const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#generate');

const apiUrl = "https://dummyjson.com/quotes";

let quotes =[];


    button.addEventListener('click',setQuote);

    function setQuote(){1
    const index = Math.floor(Math.random()*30)
        const randomQuote = (quotes[index].quote);
        const authorQuote = (quotes[index].author)
        console.log(authorQuote)
        quote.innerHTML = randomQuote;
        author.innerHTML = authorQuote;
    }


async function getQuote(url)   {
    const response = await fetch(url);
    let data = await response.json();
    quotes = data.quotes;
    // console.log(data.quotes);
    console.log(quotes)
}

getQuote(apiUrl);