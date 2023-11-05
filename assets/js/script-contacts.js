const input = document.querySelector('.input');
const next = document.querySelector('.next');
const submit = document.querySelector('.submit');

const formName = document.querySelector('.form__name');
const formMail = document.querySelector('.form__mail');
const formText = document.querySelector('.form__text');
const formIcon = document.querySelector('.form__icon img');

const front = document.querySelector('.front');
const back = document.querySelector('.back');

const loading = document.querySelector('.submit__load');

const envelope = document.querySelector('.envelope__back-image');

let target
let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const checkInputName = (e) => {
    target = e.target.value
    input.value = target
    if (target.length > 3 && target.length < 9) {
        front.style.opacity = '1'
        correct()
    }
    else {
        next.style.background = 'red'
    }
};

const checkInputEmail = () => {
    if(re.test(input.value)) {
        correct()

    }else{next.style.background = 'red'}

};

const sendMessage = () => {
    loading.classList.add('load__start')
    input.placeholder = 'sending message...'
    formText.textContent = input.value
    setTimeout(() => {
        clean()
    }, 1000);

    setTimeout(() => {
        envelope.classList.add('envelope__back-sending')
        formText.textContent = ''
        front.classList.add('front-hide')
        formMail.textContent = ''
        formName.textContent = ''
    }, 2000);
    setTimeout(() => {
        formIcon.src = 'assets/images/form/ok.png'
        input.placeholder = 'message send'
    }, 5000);
    setTimeout(() => {
        formName.textContent = 'MESSAGE SEND !!!'
        formName.style.color = 'green'
        formName.style.fontSize = '60px'
    }, 5400);
    setTimeout(() => {
        input.placeholder = 'Fill with your name'
        formIcon.src = 'assets/images/form/user.png'
        formName.textContent = ''
        formName.style.color = 'black'
        formName.style.fontSize = '28px'
        loading.classList.remove('load__start')
        envelope.classList.remove('envelope__back-sending')
        front.classList.remove('front-hide')
        submit.disabled = true
        back.style.opacity = '.1'
        front.style.opacity = '.1'

        submit.removeEventListener('click', sendMessage)
        input.removeEventListener('keyup', checkInputMessage)
        input.addEventListener('keyup', checkInputName)
        next.addEventListener('click', nextBtnClickName)
        submit.addEventListener('click', sendMessage)

        checkInputName()

    }, 7500);
};

const checkInputMessage = () => {
    if (input.value.length >=2) {
        back.style.opacity = '1'
        front.style.opacity = '.2'
        submit.disabled = false
    }
    else {
        back.style.opacity = '.05'
        front.style.opacity = '1'
        submit.disabled = true
    }
};

const nextBtnClickEmail = () => {
    formMail.textContent = input.value
    clean()
    input.placeholder = 'now write your message'
    formIcon.src = 'assets/images/form/text.png'

    input.removeEventListener('keyup', checkInputEmail)
    input.addEventListener('keyup', checkInputMessage)
    next.removeEventListener('click', nextBtnClickEmail)
};

const nextBtnClickName = () => {
    formName.textContent = input.value
    clean()
    input.placeholder = 'now your email'
    formIcon.src = 'assets/images/form/email.png'

    input.removeEventListener('keyup', checkInputName)
    input.addEventListener('keyup', checkInputEmail)

    next.removeEventListener('click', nextBtnClickName)
    next.addEventListener('click', nextBtnClickEmail)
};

const clean = () => {
    input.value = ''
    next.disabled = true
    next.style.background = 'grey'
};

const correct = () => {
    next.style.background = 'green'
    next.disabled = false
};

input.addEventListener('keyup', checkInputName)
next.addEventListener('click', nextBtnClickName)

submit.addEventListener('click', sendMessage)