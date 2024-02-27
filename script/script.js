let btn1 = document.querySelector('.img1')
let btn2 = document.querySelector('.img2')
let btn3 = document.querySelector('.img3')
let block = document.querySelector('.block');
let btnMenu = document.querySelector('#menu')
let menu = document.querySelector('.navegacao-menu')
let cart = document.querySelector('#cart')

btnMenu.addEventListener('click' , () =>{
    menu.classList.toggle('hide')
    cart.classList.toggle('hide')
    
})

btn1.addEventListener('click' , () =>{
    console.log('clicou na img 1')
    block.src = 'img/product1.png'
})

btn2.addEventListener('click' , () =>{
    console.log('clicou na img 2')
    block.src = 'img/product2.png'
})

btn3.addEventListener('click' , () =>{
    console.log('clicou na img 3')
    block.src = 'img/product3.png'
})
