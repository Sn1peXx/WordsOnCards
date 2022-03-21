const selectSingle_title = document.querySelector('.__select__title');
const selectSingle_labels = document.querySelectorAll('.__select__label');

// Переключение меню
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Закрыть когда выбран язык
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');

        LANG = selectSingle_title.textContent.slice(5);

        fetchData()
            .then(data => ARR_LENGTH = data)
            .then(() => {
                window.addEventListener('click', e => {

                    // if (ARR_LENGTH !== COUNTER) { // Если не конец массива

                    nextCardShow(e);

                    // } else {
                       // COUNTER = 0;  // Сбрасываем если дошли до конца

                    //     nextCardShow(e);
                    // }

                })
            })
    });
}
