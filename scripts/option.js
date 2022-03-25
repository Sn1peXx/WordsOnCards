const selectSingle_title = document.querySelector('.__select__title');
const selectSingle_labels = document.querySelectorAll('.__select__label');
const cardWithWord = document.querySelector('.card_content-word');
const cardWithTranslate = document.querySelector('.card_content-translate');
const selectSingle = document.querySelector('.__select');


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

        fetchData()
            .then(data => ARR_LENGTH = data)
            .then(() => {
                window.addEventListener('click', e => {
                    nextCardShow(e);
                })
            })
    })
}

// Закрыть когда выбран язык
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');

        LANG = selectSingle_title.textContent.slice(5);

        localStorage.setItem("language", LANG);

        fetchData()
            .then(data => ARR_LENGTH = data)
            .then(() => {
                window.addEventListener('click', e => {
                    nextCardShow(e);
                })
            })
    });
}

// Показывает следующее слово, при  клике на экран
function nextCardShow(e) {
    if (e.target === main) { // Если нажали мимо карточки

        // Показ сначала русского или иностранного
        if (JSON.parse(localStorage.getItem('isTranslate'))) {
            console.log('if')
            cardWithWord.classList.add('hide');
            cardWithTranslate.classList.remove('hide');
        } else {
            console.log('else')
            cardWithWord.classList.remove('hide');
            cardWithTranslate.classList.add('hide');
        }


        try {
            showDataInCard(); // Показываем новые данные
            // Проверка что бы слово не повторялось 2 раза подряд
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