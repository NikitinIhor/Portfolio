const returnHome = document.querySelector('.returnHome');
const headerTel = document.querySelector('.header__telephone-works');
const headerEmail = document.querySelector('.header__email-works');
const headerLogo = document.querySelector('.header__logo-works');
const landingItems = document.querySelectorAll('.landing__item');
const burger = document.querySelector('#menu');
const headerIcons = document.querySelectorAll('.header__icon-works');

returnHome.addEventListener('click', ()=> {
    landingItems.forEach(item => {
        item.classList.add('hide-landing__item')
    });

    headerIcons.forEach(item => {
        item.classList.add('header__icons-hide')
    });

    burger.classList.add('burger2-hide')
    document.getElementById("menu-bar2").classList.toggle("change");
    document.getElementById("nav2").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

    headerTel.classList.add('burger2-hide')
    headerEmail.classList.add('burger2-hide')
    headerLogo.classList.add('burger2-hide')

    setTimeout(() => {
        window.location = 'index.html'
      }, 1500);
    
})