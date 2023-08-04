const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      let newVal = (amountEl_one.value * rate).toFixed(2);
      amountEl_two.value = newVal;
      console.log(newVal.split(".")[0]);
      if (/\d\d\d./g.test(newVal)) {
      	amountEl_two.style.fontSize = "10px" ;
      } else if (/\d\d./g.test(newVal)) {
      	amountEl_two.style.fontSize = "40px" ;
      } else if (/\d./g.test(newVal)) {
      	amountEl_two.style.fontSize = "20px" ;
      }
    });
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

document.body.onload = () => {
	calculate();
}
