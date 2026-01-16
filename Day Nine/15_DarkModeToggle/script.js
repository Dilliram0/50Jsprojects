const inputEl = document.querySelector('#input');
const body = document.querySelector('body')

inputEl.checked = false;
updateBody();

function updateBody() {
    if (inputEl.checked) {
        body.style.backgroundColor = "black";
    }
    else {
        body.style.backgroundColor = "white";
    }
}

inputEl.addEventListener('click',updateBody);
