document.getElementById("orderButton").onclick = function () {
    let foodPrice = parselnt(document.getElementById ("food").value);
    let drinkPrice = parselnt(document.getElementById ("drink").value);

    let titalPrice = foodPrice + drinkPrice

    let discount = 0;

    if (totalPrice > 90) {
        alert('Ok');
    }

}