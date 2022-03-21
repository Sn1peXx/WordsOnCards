const headerLogo = document.querySelector('.header_logo_item');
const modalLogin = document.querySelector('.modal_login');
const loginBtn = document.querySelector('.login_btn');
const loginInput = document.querySelector('.login_input');


if (localStorage.getItem('login') === "" || localStorage.getItem('login') == null) {
    card.classList.add('hide');
    modalLogin.classList.remove('hide');
}

headerLogo.addEventListener('click', () => {
    if (modalLogin.classList.contains('hide')) {
        card.classList.add('hide');
        modalLogin.classList.remove('hide');

        headerButton.disabled = true;
        setting.disabled = true;
    }
});

loginBtn.addEventListener('click', () => {
    const login = loginInput.value;

    if (login.length !== "") {
        localStorage.setItem('login', login);
        document.cookie = `username=${localStorage.getItem("login")}`

        card.classList.remove('hide');
        modalLogin.classList.add('hide');

        location.reload()
    }

});