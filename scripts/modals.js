const checkbox = document.querySelector('#isAnimation');
const checkboxTranslate = document.querySelector("#firstLang");
const setting = document.querySelector('.setting');
const closeBtn = document.querySelector('.setting_close');
const closeWordBtn = document.querySelector('.word_close');
const modalSetting = document.querySelector('.modal_setting');
const modalWord = document.querySelector('.modal_word');
const modalHelp = document.querySelector('.modal_help');
const helpClose = document.querySelector('.help_close');
const headerButton = document.querySelector('.header_button-item');
const groupBtn = document.querySelector('.question');
const modalGroup = document.querySelector('.modal_group');
const groupClose = document.querySelector('.group_close');
const groupSelectBtn = document.querySelector('.groupSelectBtn');
const groupUnSelectBtn = document.querySelector('.groupUnSelectBtn');
const groupInput = document.querySelector('.group_input');
const questionBtn = document.querySelector('.question_btn');
const settingResently = document.querySelector('.setting_resently');
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

    const resentlyInput = document.querySelector('#resentlyAdded');

    resentlyInput.value = JSON.parse(localStorage.getItem('resentlyWords'))
});

closeBtn.addEventListener('click', () => {
    modalSetting.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');

    const resentlyInput = document.querySelector('#resentlyAdded');

    localStorage.setItem('resentlyWords', +resentlyInput.value);
    window.location.reload(true);
});


groupBtn.addEventListener('click', () => {
    showPrompt()

    modalGroup.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');

    groupSelectBtn.addEventListener('click', () => {
        if (groupInput.value) {
            localStorage.setItem('selectedGroup', groupInput.value.toLowerCase());
            location.reload()
        }
    })

    groupUnSelectBtn.addEventListener('click', () => {
        localStorage.setItem('selectedGroup', '');
        location.reload()
    })
})

groupClose.addEventListener('click', () => {
    modalGroup.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
});

questionBtn.addEventListener('click', () => {
    modalHelp.classList.toggle('hide');
    modalSetting.classList.toggle('hide');
})

helpClose.addEventListener('click', () => {
    modalHelp.classList.toggle('hide');
    modalSetting.classList.toggle('hide');
})

headerButton.addEventListener('click', () => {
    modalWord.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');

    if (localStorage.getItem('language')) {
        langSelect.textContent = '';

        showPrompt();

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

    }
})

closeWordBtn.addEventListener('click', () => {
    modalWord.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
});


function showPrompt() {
    const arrayWithWords = []
    for (let i = 0; i < data.length; i++) {
        try {
            if (data[i].group !== undefined) {
                arrayWithWords.push(data[i].group)
            }
        } catch {}
    }

    const newArrayWithWords = [...new Set(arrayWithWords)].filter(Boolean);

    for (let i = 0; i < newArrayWithWords.length; i++) {
        try {
            dataList.innerHTML += `<option value="${newArrayWithWords[i]}">`
        } catch {}
    }

}