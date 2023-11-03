
let totalPrice = 0;
let discount = 0;
const couponCodeInput = document.getElementById('Coupon-code');
const applyCouponButton = document.getElementById('Coupon-apply-btn');
const totalElement = document.getElementById('Total');
const discountElement = document.getElementById('disc');
const totalPriceElement = document.getElementById('Total-price');


applyCouponButton.disabled = true;
applyCouponButton.addEventListener('click', applyCoupon);

function applyCoupon() {
    const couponCode = couponCodeInput.value;
    if (couponCode === 'SELL200' && totalPrice >= 200) { 
        discount = totalPrice * 0.2;
        updateTotal();
    } 
}

function updateTotal() {
    const totalAfterDiscount = totalPrice - discount;

    totalElement.innerHTML = `Total : <span>${totalAfterDiscount.toFixed(2)}</span> tk`;
    discountElement.innerHTML = `Discount : <span>${discount.toFixed(2)}</span> tk`;
    totalPriceElement.innerHTML = `Total Price: ${totalPrice.toFixed(2)} TK`; 
}

function handleClickCard(target) {
   
    const productName = target.querySelector('.font-semibold.text-xl').innerText;
    
    const nameLi = document.createElement('li');
    nameLi.innerText = productName;
    
    const selectedCard = document.getElementById('Accessories-item');
    selectedCard.appendChild(nameLi);
    
    const productPrice = parseFloat(target.querySelector('p').innerText); 
    totalPrice += productPrice;
    
    const totalPriceElement = document.getElementById('Total-price');
    totalPriceElement.innerText = `Total Price: ${totalPrice.toFixed(2)} TK`;
    
    if (totalPrice >= 200) {
        applyCouponButton.disabled = false; 
    } else {
        applyCouponButton.disabled = true; 
    }
    updateTotal();
}

const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('my_modal_1');

closeModalBtn.addEventListener('click', function() {
  modal.close(); // Close the modal
  location.reload();
});
