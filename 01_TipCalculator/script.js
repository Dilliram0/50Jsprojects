const billAmount = document.querySelector('#bill');
const tipPercent = document.querySelector('#tip');
const total = document.querySelector('#total')
const btn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear')

function calculateTotal(){
    console.log("clicked")
    let billValue = (billAmount.value);
    let tipValue = tipPercent.value;
    let totalAmount = billValue * (1 + tipValue/100);
    console.log(totalAmount.toFixed(2));
    total.innerHTML = `$${totalAmount.toFixed(2)}`;
    clearBtn.style.display = "block";
}

btn.addEventListener('click',calculateTotal)

function clearAll(){
    billAmount.value = "";
    tipPercent.value = "";
    total.innerHTML = "";
    clearBtn.style.display = "none";
}

clearBtn.addEventListener('click',clearAll)

