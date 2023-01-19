// ITERATION 1

function updateSubtotal(product) {
let price = product.querySelector('.price span').innerText 
let quantity = product.querySelector('.quantity input').value
let subtotal = product.querySelector('.subtotal span').innerText
subtotal = (product.querySelector('.price span').innerText ) * (product.querySelector('.quantity input').value)
product.querySelector('.subtotal span').innerText = subtotal
return subtotal
//console.log('Calculating subtotal, yey!' , price , quantity , subtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
 let products =  document.querySelectorAll('.product')
 let totalValue = 0
  products.forEach( product => {
    let price = product.querySelector('.price span').innerText 
    let quantity = product.querySelector('.quantity input').value
    let subtotal = product.querySelector('.subtotal span').innerText
    subtotal = (product.querySelector('.price span').innerText ) * (product.querySelector('.quantity input').value)
    product.querySelector('.subtotal span').innerText = subtotal
    totalValue += subtotal
    return subtotal
  });

  // ITERATION 3

  document.querySelector('#total-value span').innerText = totalValue
  console.log (totalValue)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let prod = document.querySelector(".product")
  prod.parentNode.removeChild(prod)
  calculateAll()
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
   const removeBtn = document.querySelectorAll('.btn-remove')
   removeBtn.forEach( remove =>{
   remove.addEventListener('click' , removeProduct)
   })
   

});
