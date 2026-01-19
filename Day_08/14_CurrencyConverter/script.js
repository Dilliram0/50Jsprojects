const fromAmountEl = document.querySelector('.amount');
const toAmountEl = document.querySelector('.convertedAmount');
const fromCurrencyEl = document.querySelector('.fromCurrency');
const toCurrencyEl = document.querySelector('.toCurrency');
const resultEl = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container')

const countries = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "INR", name: "Indian Rupee" },
    { code: "NPR", name: "Nepalese Rupee" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "KRW", name: "South Korean Won" },
    { code: "THB", name: "Thai Baht" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "ZAR", name: "South African Rand" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "SEK", name: "Swedish Krona" }
];


countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code}  (${country.name})`;

    fromCurrencyEl.appendChild(option1);
    toCurrencyEl.appendChild(option2);

});

fromCurrencyEl.value = "USD";
toCurrencyEl.value = "NPR"


const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountEl.value);
    const fromCurrency = fromCurrencyEl.value;
    const toCurrency = toCurrencyEl.value;
    resultEl.textContent = "Loading Exchange Rates.....";

    try {
        // Fetch API
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        const conversionRate = data.rates[toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);

        if (typeof conversionRate === 'undefined') {
            resultEl.textContent = "Exchange Rate is not available";
            toAmountEl.value = "";
            return;
        }

        if (isNaN(amount)) {
            toAmountEl.value = "";
            resultEl.textContent = "Enter a valid amount";
            return;
        }

        toAmountEl.value = convertedAmount;
        resultEl.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

    } catch (error) {
        resultEl.textContent = "Error while loading exchange rates...";
    }


}

fromAmountEl.addEventListener('input', getExchangeRate);
fromCurrencyEl.addEventListener('change', getExchangeRate);
toCurrencyEl.addEventListener('change', getExchangeRate);
window.addEventListener('load', getExchangeRate);