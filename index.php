<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style/normalize.css">
    <link rel="stylesheet" href="./style/style.css">
    <link rel="shortcut icon" href="./assets/Logo_6.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <title>Изучение иностранных слов</title>
</head>
<body>
<header class="header">
    <div class="container">
        <div class="header_nav">
            <div class="header_input">
                <form>
                    <div class="__select" data-state="" style="z-index: 2000">
                        <div class="__select__title" data-default="Option 0">Выберите язык</div>
                        <div class="__select__content" id="select_language">
                            <input id="singleSelect0" class="__select__input" disabled type="radio" name="singleSelect" checked />
                            <label for="singleSelect0" class="__select__label">Выберите язык</label>
                            <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect" />
                            <label for="singleSelect1" class="__select__label">🇦🇮 Английский язык</label>
                            <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect" />
                            <label for="singleSelect2" class="__select__label">🇩🇪 Немецкий язык</label>
                            <input id="singleSelect4" class="__select__input" type="radio" name="singleSelect" />
                            <label for="singleSelect4" class="__select__label">🇨🇳 Китайский язык</label>
                            <input id="singleSelect5" class="__select__input" type="radio" name="singleSelect" />
                            <label for="singleSelect5" class="__select__label">🇷🇴 Румынский язык</label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="header_logo">
                <img src="./assets/LOGO.svg" alt="" class="header_logo_item">
            </div>
            <div class="header_button">
                <button class="header_button-item alt"></button>
            </div>
        </div>
    </div>
</header>

<main class="main">
    <div class="card">
        <div class="card_content card_content-word" style="padding: 20px 20px;">
            <span style="font-size: 35px; font-weight: 500;">Выберите язык</span><br>
            <span class="blue_span" style="font-size: 23px; color: #2B6ADE; font-weight: 300;"> И нажмите с любой стороны от карточки</span></div>
        <div class="card_content card_content-translate hide" style="padding: 20px 20px;">
            <span style="font-size: 35px; font-weight: 500;">Выберите язык</span><br>
            <span class="blue_span" style="font-size: 23px; color: #2B6ADE; font-weight: 300;"> И нажмите с любой стороны от карточки</span></div>
    </div>
    </div>
</main>

<button class="setting">
    <img src="./assets/icons8-settings-50.svg" width="40" alt="settings">
</button>

<button class="question">
    <img src="./assets/layers.png" style="opacity: .6;" width="40" alt="group">
</button>

<div class="modal_setting hide">
    <button class="setting_close close"></button>
    <h3 class="setting_title">Настройки</h3>

    <div class="setting_item">
        <p class="setting_subtitle">Анимации</p>
        <label class="switch">
            <input type="checkbox" id="isAnimation">
            <span class="slider round"></span>
        </label>
    </div>

    <div class="setting_item" style="margin-top: 20px;">
        <p class="setting_subtitle">Сначала на русском</p>
        <label class="switch">
            <input type="checkbox" id="firstLang">
            <span class="slider round"></span>
        </label>
    </div>

    <div class="setting_item" style="border-bottom: none">
        <button class="setting_button">Посмотреть мои слова</button>
    </div>
</div>

<div class="modal_help hide">
    <button class="setting_close help_close close"></button>
    <h3 class="setting_title" style="color: #2B6ADE">Помощь</h3>
    <p class="help_text">В первую очередь вам необходимо добавить слова для изучения. Для этого нажмите в правом верхнем углу на + <br><br>
        При нажатии на карточку показывается перевод слова. При нажатии с любой стороны от карточки меняется слово. <br><br>
        Приятного пользования!
    </p>
</div>


<div class="modal_group hide">
    <button class="setting_close group_close close"></button>
    <h3 class="setting_title" style="color: #2B6ADE">Выберите группу слов</h3>
    <div class="input_group-modal">
        <input class="word_input group_input" autocomplete="off" type="text" placeholder="Группа (Животные, Город ...)" list="listGroup" name="wordGroup">
        <datalist id="listGroup"></datalist>
        <div style="display:flex; justify-content: space-evenly">
            <button class="setting_button groupSelectBtn groupBtn">Подтвердить</button>
            <button class="setting_button groupUnSelectBtn groupBtn">Без группы</button>
        </div>
    </div>
</div>


<div class="modal_word hide">
    <button class="word_close close"></button>
    <h3 class="setting_title">Добавьте новое слово</h3>

    <div class="word_item">
        <form action="./data/write-in-json.php" class="word_form" method="post">
            <input class="word_input" type="text" autocomplete="off" placeholder="Слово на иностранном языке" required name="wordLang">
            <textarea class="word_area" placeholder="Дополнительная информация" name="descLang"></textarea>
            <input class="word_input" autocomplete="off" type="text" placeholder="Перевод слова" required name="wordTrans">
            <textarea class="word_area" placeholder="Дополнительная информация" name="descTrans"></textarea>
            <input class="word_input" autocomplete="off" type="text" placeholder="Группа (Животные, Город ...)" list="listGroup" name="wordGroup">
            <datalist id="listGroup"></datalist>
            <select name="langSelect" required class="word_select">
                <option value="Английский язык">🇦🇮 Английский язык</option>
                <option value="Немецкий язык">🇩🇪 Немецкий язык</option>
                <option value="Китайский язык">🇨🇳 Китайский язык</option>
                <option value="Румынский язык">🇷🇴 Румынский язык</option>
            </select>

            <button class="word_button" type="submit">Добавить</button>
        </form>
    </div>
</div>

<div class="modal_all hide">
    <button class="modal_all-close close"></button>
    <h3 class="setting_title">Ваши слова</h3>
    <div class="modal_all_items"></div>
</div>

<div class="modal_login hide animate__animated animate__backInDown">
    <h3 class="setting_title login_title">Вход в аккаунт</h3>
    <p class="login_text">Запомните свой логин, под ним будут сохранены ваши слова</p>
    <div class="login_form">
        <input type="text" class="login_input" placeholder="Введите логин">
        <button class="login_btn">Войти</button>
    </div>
</div>


<script src="scripts/option.js"></script>
<script src="./scripts/card.js"></script>
<script src="./scripts/modals.js"></script>
<script src="scripts/request.js"></script>
<script src="scripts/showWords.js"></script>
<script src="./scripts/login.js"></script>

</body>
</html>