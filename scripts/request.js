const fetchData = async () => {
    const obj = await fetch('http://i95239ig.beget.tech/data/data.json', {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })

    const dataJson = await obj.json();

    data.length = 0;

    const usersWord = dataJson.filter(user => {
        return user.username === localStorage.getItem("login") && user.lang === LANG
    })

    return data.push(...usersWord);
}