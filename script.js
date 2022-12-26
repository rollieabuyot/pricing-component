let checkBox = document.querySelector('#toggle');
let Monthly = document.querySelectorAll('.price-monthly');
let Yearly = document.querySelectorAll('.price-annually');

checkBox.addEventListener('change', function() {

    if(checkBox.checked) {
        console.log('checked');
        Yearly.forEach(price => price.style.display = "none");
        Monthly.forEach(price => price.style.display = "block");
    } else {
        console.log('unchecked');
        Yearly.forEach(price => price.style.display = "block");
        Monthly.forEach(price => price.style.display = "none");
    }
});