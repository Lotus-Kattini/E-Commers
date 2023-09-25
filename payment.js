//payment
let BuyNow=document.querySelector('.BuyNow');
let close=document.querySelector('.close')
BuyNow.addEventListener('click',()=>{
  body.classList.add('activee')
})

close.addEventListener('click',()=>{
    body.classList.remove('activee')
})