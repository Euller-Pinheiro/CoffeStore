let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    carItem.classList.remove('active');
    navbar.classList.remove('active');
}

let carItem = document.querySelector('.cart-itens-container');

document.querySelector('#cart-btn').onclick = () =>{
    carItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    carItem.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}