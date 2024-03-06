var totalCost = 0; //global var

function updateTotal(itemId) {
    // get the quantity and price of the item
  var quantity = document.getElementById(itemId + 'quantity').value;
  var priceStr = document.getElementById(itemId + 'price').innerHTML;
  var price = parseFloat(priceStr); // convert price string to number
    
    // calculate the total cost of the item
  var total = quantity * price;

    // the below line updates the HTML with the calculated total cost 
  document.getElementById(itemId + 'result').innerHTML = total.toFixed(0) + ' &euro;'; // format total to 0 decimal places
  
    // update the overall total cost by adding the new total cost to the existing total cost
  totalCost = totalCost + total;
  
  // update the HTML with overall total cost 
  document.getElementById('subtotal').innerHTML = totalCost.toFixed(0) + ' &euro;';
}
