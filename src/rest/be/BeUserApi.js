const http = require('../../utils/axios');


async function banUser() {
    const data = await http.post("/users/1/ban", {})
    console.log(data)
    return data
}

async function unbanUser() {
    const data = await http.post("/users/1/unban", {})
    console.log(data)
    return data
}