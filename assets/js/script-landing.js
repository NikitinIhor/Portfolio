const returnHome = document.querySelector('.returnHome');
const headerTel = document.querySelector('.header__telephone-works');
const headerEmail = document.querySelector('.header__email-works');
const headerLogo = document.querySelector('.header__logo-works');
const landingItems = document.querySelectorAll('.landing__item');
const burger = document.querySelector('#menu');
const headerIcons = document.querySelectorAll('.header__icon-works');
const landingTitle = document.querySelector('.landing__title');

const menu2 = document.querySelector('.works-list2');

const chengePage2 = (e) => {
    let page2 = e.target

    if (page2.classList.contains('returnHome')) {
        setTimeout(() => {
            window.location = 'index.html'
        }, 1500);
    }
    if (page2.classList.contains('show-my-contacts')) {
        setTimeout(() => {
            window.location = 'index_contacts.html'
        }, 1500);
    }

    landingItems.forEach(item => {
        item.classList.add('hide-landing__item')
    });

    headerIcons.forEach(item => {
        item.classList.add('header__icons-hide')
    });

    burger.classList.add('burger2-hide')
    landingTitle.classList.add('burger2-hide')
    document.getElementById("menu-bar2").classList.toggle("change");
    document.getElementById("nav2").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

    headerTel.classList.add('burger2-hide')
    headerEmail.classList.add('burger2-hide')
    headerLogo.classList.add('burger2-hide')
};
// --------------------------------------------------
const headerLogoChenge = () => {
    setTimeout(() => {
        headerLogo.style.textShadow = '1px 1px 2px red, 0 0 1em rgb(255, 255, 255), 0 0 0.2em rgb(255, 255, 255)'

    }, 500);
};
headerLogoChenge()

menu2.addEventListener('click', chengePage2 )