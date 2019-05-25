function solve() {
    let productAddButtons = Array.from(document.getElementsByClassName("add-product"));
    let checkoutButton = document.getElementsByClassName("checkout")[0];
    let resultField = document.getElementsByTagName("textarea")[0];
    let shoppingCart = new Set();
    let totalPrice = 0;
    for (const productAddButtonElement of productAddButtons) {
        productAddButtonElement.addEventListener("click", onClick);
    }
checkoutButton.addEventListener("click",checkout);
   
    function onClick() {
        let productName = this.parentElement.parentElement.getElementsByClassName("product-title")[0].textContent;
        let productPrice = this.parentElement.parentElement.getElementsByClassName("product-line-price")[0].textContent;
        shoppingCart.add(productName);
        totalPrice+=+productPrice;
        let result = `Added ${productName} for ${productPrice} to the cart.\n`;
        resultField.textContent += result;
        console.log(resultField);
    }
    
    function checkout() {
        resultField.textContent+=`You bought ${Array.from(shoppingCart.values()).join(", ")} for ${totalPrice.toFixed(2)}.`;
        for (const productAddButtonElement of productAddButtons) {
            productAddButtonElement.disabled =true;
        }
        checkoutButton.disabled=true;

    }
}