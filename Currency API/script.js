fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b47555c0a9fe45e6b77100ea5aed7d91")
    .then((result) => {

        let myData = result.json();
        return myData;
    })
    .then((currency) => {

        let amount = document.querySelector(".amount");
        let madPrice = document.querySelector(".mad span");
        let eurPrice = document.querySelector(".eur span");

        madPrice.innerHTML = (amount.innerHTML * currency.rates["MAD"]).toFixed(2);
        eurPrice.innerHTML = (amount.innerHTML * currency.rates["EUR"]).toFixed(2);
    })
    .catch((error) => console.log(error));