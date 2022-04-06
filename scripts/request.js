const fetchData = async () => {
    //  http://i95239ig.beget.tech/data/data.json
    const obj = await fetch('http://localhost:8888/ForeignCards/data/data.json', {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials" : true
        }
    })

    const dataJson = await obj.json();

    data.length = 0;


    const usersWord = dataJson.reverse().filter(user => {
        if (localStorage.getItem('selectedGroup')) {
            return user.username === localStorage.getItem("login") && user.lang === localStorage.getItem('language') && user.group === localStorage.getItem('selectedGroup');
        }

        return user.username === localStorage.getItem("login") && user.lang === localStorage.getItem('language');

    })

    return data.push(...usersWord);
}