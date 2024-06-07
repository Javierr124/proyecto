const btnCart = document.querySelector('.container-icon')
const containercartproducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containercartproducts.classList.toggle('hidden-cart')
}) 