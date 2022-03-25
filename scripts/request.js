const fetchData = async () => {
    //  http://i95239ig.beget.tech/data/data.json
    const obj = await fetch('http://localhost:8888/ForeignCards/data/data.json', {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })

    const dataJson = await obj.json();

    data.length = 0;

    const usersWord = dataJson.filter(user => {
        return user.username === localStorage.getItem("login") && user.lang === localStorage.getItem('language');
    })

    return data.push(...usersWord);
}