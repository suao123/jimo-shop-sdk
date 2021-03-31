const http = require("../../utils/axios")
const api = "/users/"


updateProfile = async (userId, profileFrom) => {
    var data = await http.post(api + userId + "/profile", profileFrom, 0)
    console.log(data)
    return data
}

logout = async (userId, logoutForm) => {
    var data = await http.post(api + userId + "/logout", logoutForm, 0)
    console.log(data)
    return data
}

test = {
    nickname : "小花",
    avatar : "测试",
    gender : 1,
    birthday : 1,
    province : "浙江省",
    city : "杭州市",
    area : "余杭区"
}