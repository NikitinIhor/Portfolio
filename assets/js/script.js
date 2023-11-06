const text = 'Hello, my name is Nikitin Ihor\n\
i am a frontend developer\n\
i love to learn to get better...\n\
     ___________________________'
let line = 0
let count = 0
let result = ''

const pre = document.querySelector('pre')

const typeText = () => {
  setTimeout(() => {
    const interval = setInterval(() => {
      result += text[line][count]
      pre.innerHTML = result + '|'
      count++
      if (count >= text[line].length) {
        count = 0
        line++
      }
      if (line == text.length) {
        clearInterval(interval)
        pre.innerHTML = result
        return true
      }
    }, 40);
  }, 5500);
};

typeText()
// ------------------------------------------------------

const header = document.querySelector('.arrow__text');
const arrow = document.querySelector('.arrow__image');

let colors = '0123456789ABCDEF'
let randomColor = '#'

const generateColor = () => {
  setInterval(() => {
    for (let i = 0; i < 6; i++) {
      randomColor += colors[Math.floor(Math.random() * colors.length)]
    }
    header.style.color = randomColor
    randomColor = '#'
  }, 300);
};
generateColor()

const arrowChange = () => {
  setInterval(() => {
    arrow.classList.toggle('arrowUp')
  }, 300);
};
arrowChange()
// ---------------------------------------------------

const span1 = document.querySelector('.one');
const span2 = document.querySelector('.two');

const textColor = () => {
  setTimeout(() => {
    span1.classList.add('show-one')
  }, 4500);
  setTimeout(() => {
    span2.classList.add('show-two')
  }, 4000);
};

textColor()
// --------------------------------------------------
const page = document.querySelector('.page');
const icons = document.querySelector('.page__icons');
const arrowShow = document.querySelector('.page__arrow ');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');
const iconOnStart = document.querySelector('.page__iconsOnStart');

const iconOnStart1 = document.querySelector('.iconOnStart1');
const iconOnStart2 = document.querySelector('.iconOnStart2');
const iconOnStart3 = document.querySelector('.iconOnStart3');
const iconOnStart4 = document.querySelector('.iconOnStart4');
const iconOnStart5 = document.querySelector('.iconOnStart5');
const iconOnStart6 = document.querySelector('.iconOnStart6');
const iconOnStart7 = document.querySelector('.iconOnStart7');

const mail = document.querySelector('.header__email');
const telefon = document.querySelector('.header__telephone');
const burger = document.querySelector('#menu');

const footerIcons = document.querySelector('.footer__icons');

(function () {
  setTimeout(() => {
    iconOnStart.style.display = 'none'
    footerIcons.classList.add('footer__icons-show')
  }, 6000);
  setTimeout(() => {
    page.classList.add('show__background')
    icons.classList.add('show__icons')

  }, 5500);
  setTimeout(() => {
    iconOnStart1.classList.add('iconOnStart1-move')
    iconOnStart2.classList.add('iconOnStart2-move')
    iconOnStart3.classList.add('iconOnStart3-move')
    iconOnStart4.classList.add('iconOnStart4-move')
    iconOnStart5.classList.add('iconOnStart5-move')
    iconOnStart6.classList.add('iconOnStart6-move')
    iconOnStart7.classList.add('iconOnStart7-move')
  }, 3500);
  setTimeout(() => {
    link1.classList.add('link1-show')
    link2.classList.add('link2-show')
    link3.classList.add('link3-show')

    burger.classList.add('burger-show')
  }, 4000);
  setTimeout(() => {
    arrowShow.classList.add('page__arrow-show')

    mail.classList.add('show__mail-tel')
    telefon.classList.add('show__mail-tel')
  }, 5000);
})();
// --------------------------------------------------
const loading = document.querySelector('.loading');
let second = 0

const load = () => {
  setInterval(() => {
    if (second < 100) {
      second++
      loading.textContent = `${second}%`
    }
    switch (second) {
      case 20:
        loading.style.color = 'pink'
        break;
      case 40:
        loading.style.color = 'yellow'
        break;
      case 60:
        loading.style.color = 'greenyellow'
        break;
      case 80:
        loading.style.color = 'green'
        break;
      default:
        break;
    }
  }, 30);
  setTimeout(() => {
    loading.classList.add('loading-hide')
  }, 3200);
};
load()
// -----------------------------------------------------------
const pageArrow = document.querySelector('.page__arrow');

pageArrow.addEventListener('click', () => {

  burger.classList.add('burger-hide')
  document.getElementById("menu-bar").classList.remove("change");
  document.getElementById("nav2").classList.remove("change");
  document.getElementById("menu-bg").classList.remove("change-bg");

  setTimeout(() => {
    link1.classList.remove('link1-show')
    link2.classList.remove('link2-show')
    link3.classList.remove('link3-show')
    link1.classList.add('link-hide')
    link2.classList.add('link-hide')
    link3.classList.add('link-hide')

    arrowShow.classList.add('page__arrow-hide')

    mail.classList.remove('show__mail-tel')
    telefon.classList.remove('show__mail-tel')
    span1.classList.remove('show-one')
    span2.classList.remove('show-two')

    icons.classList.remove('show__icons')

    pre.classList.add('page__arrow-hide')

    pageArrow.classList.remove('isDisabled')
  }, 500);

  setTimeout(() => {
    page.classList.remove('show__background')
  }, 1800);

  setTimeout(() => {
    window.location = 'index_works.html'
  }, 2000);

})
// -----------------------------------------------------------

const menu = document.querySelector('.works-list1');

const chengePage = (e) => {
  let page = e.target
  
  if(page.classList.contains('show-my-works')){
    setTimeout(() => {
      window.location = 'index_works.html'
    }, 2000);
  }
  if(page.classList.contains('show-my-contacts')){
    setTimeout(() => {
      window.location = 'index_contacts.html'
    }, 2000);
  }

  burger.classList.add('burger-hide')
  document.getElementById("menu-bar").classList.remove("change");
  document.getElementById("nav2").classList.remove("change");
  document.getElementById("menu-bg").classList.remove("change-bg");

  setTimeout(() => {
    link1.classList.remove('link1-show')
    link2.classList.remove('link2-show')
    link3.classList.remove('link3-show')
    link1.classList.add('link-hide')
    link2.classList.add('link-hide')
    link3.classList.add('link-hide')

    arrowShow.classList.add('page__arrow-hide')

    mail.classList.remove('show__mail-tel')
    telefon.classList.remove('show__mail-tel')
    span1.classList.remove('show-one')
    span2.classList.remove('show-two')

    icons.classList.remove('show__icons')

    pre.classList.add('page__arrow-hide')

    pageArrow.classList.remove('isDisabled')
  }, 500);

  setTimeout(() => {
    page.classList.remove('show__background')
  }, 1800);
};

menu.addEventListener('click', chengePage)