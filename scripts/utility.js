const cardWithWord = document.querySelector('.card_content-word');
const cardWithTranslate = document.querySelector('.card_content-translate');
const selectSingle = document.querySelector('.__select');

 
let ARR_LENGTH;
let COUNTER = 0;
let LANG = '';
let data = []; // Слова из json
let myWords = [];


// Показывает следующее слово, при двойном клике на экран
function nextCardShow(e) {
    if (e.target === main) { // Если нажали мимо карточки

        cardWithWord.classList.remove('hide');
        cardWithTranslate.classList.add('hide');

        try {
            showDataInCard(); // Показываем новые данные
            // COUNTER++;
            COUNTER = getRandomValue(0, ARR_LENGTH);
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