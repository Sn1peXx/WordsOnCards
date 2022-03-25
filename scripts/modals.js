const checkbox = document.querySelector('#isAnimation');
const checkboxTranslate = document.querySelector("#firstLang");
const setting = document.querySelector('.setting');
const closeBtn = document.querySelector('.setting_close');
const closeWordBtn = document.querySelector('.word_close');
const modalSetting = document.querySelector('.modal_setting');
const modalWord = document.querySelector('.modal_word');
const headerButton = document.querySelector('.header_button-item');
const questionBtn = document.querySelector('.question');
const modalHelp = document.querySelector('.modal_help');
const closeHelp = document.querySelector('.help_close');
const body = document.querySelector('body');
const main = document.querySelector('.main');

document.addEventListener("DOMContentLoaded", () => {
    checkbox.checked = JSON.parse(localStorage.getItem('isAnimation'));
    checkboxTranslate.checked = JSON.parse(localStorage.getItem('isTranslate'));
});

checkbox.addEventListener('change', () => {
    localStorage.setItem('isAnimation', JSON.stringify(checkbox.checked));
});

checkboxTranslate.addEventListener('change', () => {
    localStorage.setItem('isTranslate', JSON.stringify(checkboxTranslate.checked));
})

setting.addEventListener('click', () => {
    modalSetting.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
});

headerButton.addEventListener('click', () => {
    modalWord.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
})

closeBtn.addEventListener('click', () => {
    modalSetting.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
});

closeWordBtn.addEventListener('click', () => {
    modalWord.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
});

questionBtn.addEventListener('click', () => {
    modalHelp.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
})

closeHelp.addEventListener('click', () => {
    modalHelp.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
})