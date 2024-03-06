function showTotalWithShipping() {
  // add 10 euros for shipping
  var totalWithShipping = totalCost + 10;

  // create a pop-up message
  alert("Your total amount plus a base 10 euro shipping is: " + totalWithShipping.toFixed(0) + "€");
}