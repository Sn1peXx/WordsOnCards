
const card = document.querySelector('.card');

card.addEventListener('click', (e) => {

    if (cardWithWord.classList.contains('hide')) {
        cardWithWord.classList.remove('hide');
        cardWithTranslate.classList.add('hide');

        withAnimation()

    } else {

        cardWithWord.classList.add('hide');
        cardWithTranslate.classList.remove('hide');

        withAnimation()
    }
})


function withAnimation() {
    if (!checkbox.checked) {
        card.classList.add('animate__animated', 'animate__flipInY');

        setTimeout(() => {
            card.classList.remove('animate__animated', 'animate__flipInY');
        }, 1000)
    }
}