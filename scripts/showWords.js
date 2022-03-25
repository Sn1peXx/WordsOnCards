const settingBtn = document.querySelector('.setting_button');
const closeModalAll = document.querySelector('.modal_all-close');
const modalAll = document.querySelector('.modal_all');
const modalAllItem = document.querySelector('.modal_all_items');


const fetchMyWords = async () => {
    //  http://i95239ig.beget.tech/data/data.json
    const obj = await fetch('http://localhost:8888/ForeignCards/data/data.json', {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })

    const dataJson = await obj.json();

    const usersWord = dataJson.filter(user => {
        return user.username === localStorage.getItem("login")
    })

    return myWords.push(...usersWord);
}


settingBtn.addEventListener('click', () => {
    modalSetting.classList.remove('hide');
    main.classList.add('hide');
    body.classList.add('blur');
    modalAll.classList.toggle('hide');

    fetchMyWords()
        .then(countItem => {
            for (let i = 0; i < countItem; i++) {
                modalAllItem.innerHTML += `
                    <form class="modal_item" action="./data/delete-from-json.php" method="post">
                        <input type="text" class="modal_item-word" readonly name="wordLang" value=${myWords[i].word}>
                        <div class="modal_item-translate">${myWords[i].translate}</div>
                        <button type="submit" class="modal_item-delete">Удалить</button>
                    </form>
                `;
            }
        });
});


closeModalAll.addEventListener('click', () => {
    modalSetting.classList.toggle('hide');
    main.classList.toggle('hide');
    body.classList.toggle('blur');
    modalAll.classList.toggle('hide');
});