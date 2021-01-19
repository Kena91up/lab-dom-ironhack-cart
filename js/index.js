// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')

    let subtotal = product.querySelector(".subtotal span")
    let subtotalValue = price.textContent * quantity.value
    subtotal.innerHTML = subtotalValue
  

  return Number(subtotalValue);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  let products = document.querySelectorAll(".product");
  let sum = 0
       for(let i = 0; i < products.length; i++){
         sum = sum + updateSubtotal(products[i])
       }
   
  // ITERATION 3
  
  let totalValue = document.querySelector("#total-value span")
   totalValue.innerHTML = sum;
    
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const targetToRemove = target.parentNode.parentNode

  const targetToRemoveParent = targetToRemove.parentNode

  targetToRemoveParent.removeChild(targetToRemove)

  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
