const selectSingle_title = document.querySelector('.__select__title');
const selectSingle_labels = document.querySelectorAll('.__select__label');
const cardWithWord = document.querySelector('.card_content-word');
const cardWithTranslate = document.querySelector('.card_content-translate');
const selectSingle = document.querySelector('.__select');
const headerAddWord = document.querySelector('.header_button-item');


let ARR_LENGTH;
let COUNTER = 0;
let LANG = '';
let data = []; // Слова из json
let myWords = [];
let unusedValue = null;


// Переключение меню
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});


// Если язык уже был выбран, то показывает его
if (localStorage.getItem('language')) {
    window.addEventListener('DOMContentLoaded', () => {

        switch (localStorage.getItem('language')) {
            case 'Английский язык':
                selectSingle_title.textContent = "🇦🇮 " + localStorage.getItem('language');
                break;
            case 'Немецкий язык':
                selectSingle_title.textContent = "🇩🇪 " + localStorage.getItem('language');
                break;
            case 'Китайский язык':
                selectSingle_title.textContent = "🇨🇳 " + localStorage.getItem('language');
                break;
            case 'Румынский язык':
                selectSingle_title.textContent = "🇷🇴 " + localStorage.getItem('language');
                break;
        }

        fetchRequest()

    })
}

// Закрыть когда выбран язык
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');

        LANG = selectSingle_title.textContent.slice(5);

        localStorage.setItem("language", LANG);

        fetchRequest()
    });
}


function fetchRequest() {
    fetchData()
        .then(data => {

            if (!!localStorage.getItem('resentlyWords') === false) {
                localStorage.setItem('resentlyWords', 0);
            }

            if (JSON.parse(localStorage.getItem('resentlyWords')) === 0) {
                ARR_LENGTH = data
            } else {
                ARR_LENGTH = localStorage.getItem('resentlyWords');
            }

            settingResently.innerHTML = `
                    <p class="setting_subtitle">Показывать последних слов</p>
                    <input class="resently_input" min="0" max="${data}" type="number" id="resentlyAdded">
                `
        })
        .then(() => {
            window.addEventListener('click', e => {
                nextCardShow(e);
            })
        })
}


// Показывает следующее слово, при клике на экран
function nextCardShow(e) {
    if (e.target === main) { // Если нажали мимо карточки

        // Показ сначала русского или иностранного
        if (JSON.parse(localStorage.getItem('isTranslate'))) {
            cardWithWord.classList.add('hide');
            cardWithTranslate.classList.remove('hide');
        } else {
            cardWithWord.classList.remove('hide');
            cardWithTranslate.classList.add('hide');
        }


        try {
            if (ARR_LENGTH !== 1) {
                showDataInCard(); // Показываем новые данные
                // Проверка, что бы слово не повторялось 2 раза подряд
                unusedValue = getRandomValue(0, ARR_LENGTH);

                if (unusedValue !== COUNTER) {
                    COUNTER = unusedValue;
                    unusedValue = null;
                } else {
                    while (COUNTER === unusedValue) {
                        unusedValue = getRandomValue(0, ARR_LENGTH);
                    }
                    COUNTER = unusedValue;
                    unusedValue = null;
                }
            } else {
                COUNTER = 0;
                showDataInCard();
            }


        } catch {}
    }
}


// Отображает слова на карточке
function showDataInCard() {
    cardWithWord.innerHTML = `
        <h1 class="card_word card_word-lang">${ucFirst(data[COUNTER].word)}</h1>
        <p class="card_description card_description-lang">${ucFirst(data[COUNTER].desc)}</p>    
    `;

    cardWithTranslate.innerHTML = `
            <h1 class="card_word card_word-ru">${ucFirst(data[COUNTER].translate)}</h1>
            <p class="card_description card_description-ru">${ucFirst(data[COUNTER].rudesc)}</p>
    `;
}

// Увеличивает первую букву в строке
function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

if (window.innerWidth <= 710) {
    document.querySelector('.header_logo_item').src = "./assets/Logo2.svg";
    document.querySelector('.header_logo_item').style.width = "60px";
    document.querySelector('.header_logo_item').style.marginTop = "8px";
}

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}


window.addEventListener("DOMContentLoaded", () => {
    fetchData().then(data => {
        headerAddWord.addEventListener('click', () => {
            if (data >= 3) {
                modalWord.classList.toggle('hide');
                main.classList.toggle('hide');
                body.classList.toggle('blur');

                alert("Разрешено не более 50 слов");
            }
        })

    })
})