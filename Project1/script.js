function calculateTotal(cardNumber, unitPrice) {
    var quantity = document.getElementById('quantityInput' + cardNumber).value;
    var totalPrice = quantity * unitPrice;
    var summaryText = 'Great! Order of ' + quantity + ' items is received, total price is $' + totalPrice.toFixed(2);
    document.getElementById('summary' + cardNumber).innerText = summaryText;
  }
  