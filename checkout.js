

// const price remove and quantity  
let price = document.querySelectorAll(".product-line-price");
// console.log(price);
let removeButton = document.querySelectorAll(".remove-product");
// console.log(removeButton);

let subTotal = document.getElementById("cart-subtotal").lastElementChild;
let tax = document.getElementById("cart-tax").lastElementChild;
let shippingPrice = document.getElementById("cart-shipping").lastElementChild;
let total = document.getElementById("cart-total").lastElementChild;

let amountMinus = document.querySelectorAll(".fa-minus");
// console.log(amountMinus);

let amountPlus = document.querySelectorAll(".fa-plus");
// console.log(amountPlus);



//Func
let productPrice =()=>{
    
    price = document.querySelectorAll(".product-line-price");
    console.log(price);
    let sum = 0;
    price.forEach((e) => {
        sum += Number(e.innerText);
    });
    subTotal.innerText = sum.toFixed(2);
    tax.innerText = (sum * 0.18).toFixed(2);
    if(subTotal.innerText > 0){
    shippingPrice.innerText = "15.00";}
    else{
    shippingPrice.innerText = "0.00";}

    
    total.innerText = (Number(subTotal.innerText) + Number(tax.innerText) + Number(shippingPrice.innerText)).toFixed(2);


};
productPrice();


amountMinus.forEach((e) => {
  
    e.parentElement.addEventListener("click",() =>{
        
        if(e.parentElement.nextElementSibling.innerText > 1){
        let quantity = e.parentElement.nextElementSibling.innerText--;
        let productOnePrice =e.parentElement.parentElement.previousElementSibling.children[0].children[0].innerText;
        let productTotalPrice = (productOnePrice * (quantity - 1)).toFixed(2);
        e.parentElement.parentElement.nextElementSibling.nextElementSibling.innerText = productTotalPrice;
        
        productPrice();
        // console.log(quantity);
        // console.log(productTotalPrice);
        // console.log(productOnePrice);
    }
    else{
        if(confirm("Ürün silinsin mi") == true){
            e.parentElement.parentElement.parentElement.parentElement.remove();
            productPrice();
        }
        
        
    }
    })
})
amountPlus.forEach((e) => {
    
    e.parentElement.addEventListener("click", () => {
        
    let quantity = e.parentElement.previousElementSibling.innerText++;
    let productOnePrice =e.parentElement.parentElement.previousElementSibling.children[0].children[0].innerText;
    let productTotalPrice = (productOnePrice * (quantity + 1)).toFixed(2);
    e.parentElement.parentElement.nextElementSibling.nextElementSibling.innerText = productTotalPrice;
    productPrice();
    // console.log(quantity);
    // console.log(productTotalPrice);
    // console.log(productOnePrice);
})
})

let productRemove = () => {
    removeButton.forEach((e)=> {
        e.addEventListener("click", () => {
            e.parentElement.parentElement.parentElement.remove();
            
            productPrice();

        })
    })
}
productRemove();


