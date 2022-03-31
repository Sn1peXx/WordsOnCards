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
const dataList = document.querySelector('#listGroup');
const langSelect = document.querySelector('[name=langSelect]');

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

    for (let i = 0; i < data.length; i++) {
        if (data[i].group !== undefined) {
            dataList.innerHTML += `<option value="${data[i].group}">`
        }
    }


    if (localStorage.getItem('language')) {
        switch (localStorage.getItem('language')) {
            case 'Английский язык':
                langSelect.innerHTML = `
                    <option value="Английский язык" selected>🇦🇮 Английский язык</option>
                    <option value="Немецкий язык">🇩🇪 Немецкий язык</option>
                    <option value="Китайский язык">🇨🇳 Китайский язык</option>
                    <option value="Румынский язык">🇷🇴 Румынский язык</option>
                    `
                break;
            case 'Немецкий язык':
                langSelect.innerHTML = `
                    <option value="Английский язык">🇦🇮 Английский язык</option>
                    <option value="Немецкий язык" selected>🇩🇪 Немецкий язык</option>
                    <option value="Китайский язык">🇨🇳 Китайский язык</option>
                    <option value="Румынский язык">🇷🇴 Румынский язык</option>
                    `
                break;
            case 'Китайский язык':
                langSelect.innerHTML = `
                    <option value="Английский язык">🇦🇮 Английский язык</option>
                    <option value="Немецкий язык">🇩🇪 Немецкий язык</option>
                    <option value="Китайский язык" selected>🇨🇳 Китайский язык</option>
                    <option value="Румынский язык">🇷🇴 Румынский язык</option>
                    `
                break;
            case 'Румынский язык':
                langSelect.innerHTML = `
                    <option value="Английский язык">🇦🇮 Английский язык</option>
                    <option value="Немецкий язык">🇩🇪 Немецкий язык</option>
                    <option value="Китайский язык">🇨🇳 Китайский язык</option>
                    <option value="Румынский язык" selected>🇷🇴 Румынский язык</option>
                    `
                break;
        }

    } else {
        langSelect.innerHTML = `
            <option value="Английский язык">🇦🇮 Английский язык</option>
            <option value="Немецкий язык">🇩🇪 Немецкий язык</option>
            <option value="Китайский язык">🇨🇳 Китайский язык</option>
            <option value="Румынский язык">🇷🇴 Румынский язык</option>
        `
    }
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