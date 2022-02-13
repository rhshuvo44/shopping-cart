function updateNumber(id,isAdd,price) {
    let updateNumberText = document.getElementById(id +'-number');
    let updateNumber =parseInt(updateNumberText.value);
    if(isAdd == true){
        updateNumber = updateNumberText.value = updateNumber + 1;
    }else if(updateNumber > 0){
        updateNumber= updateNumberText.value = updateNumber - 1;
    }
 
 updateNumberText.value =updateNumber;
   const totalPrice= updateNumberText.value * price;
   document.getElementById(id +'-total').innerText =totalPrice;
   calculat()
}
function inputVlaue(id) {
    let updateNumberText = document.getElementById(id +'-number');
    let updateNumber =parseInt(updateNumberText.value);
    return updateNumber;
}
function calculat(){
    const phoneCost =inputVlaue('phone') *1219;
    const caseCost =inputVlaue('case') *69;
    const subTotal =phoneCost + caseCost;
    const tax =subTotal / 10;
    const totalPrice =subTotal + tax;
    document.getElementById('sub-total').innerHTML =subTotal;
    document.getElementById('tax-total').innerHTML =tax;
    document.getElementById('total-price').innerHTML =totalPrice;
}
// phone
document.getElementById('phone-plus').addEventListener('click',function(){
    updateNumber('phone',true,1219);
});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateNumber('phone',false,1219); 
});
//case
document.getElementById('case-plus').addEventListener('click',function(){
    updateNumber('case',true,69);
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateNumber('case',false,69);
});