const http = require("../../utils/axios")
const api = "/settings/"


module.exports.api = {

    saveSetting : saveSetting = async (keyword, content) => {
        var settingForm = {
            keyword : keyword,
            content : content
        } 
        var data = await http.post(api, settingForm, 1)
        return data
    },
    
    table : table = async (keyword, offset, limit) => {
        var queryForm = {
            keyword : keyword,
            offset : offset,
            limit : limit
        }
        var data = await http.get(api + "query", queryForm, 1)
        return data
    },
    
    getSettings : getSettings = async (keyword) => {
        var queryForm = {
            keyword : keyword
        }
        var data = await http.get(api + "byKeyword", queryForm, 1)
        return data
    }
}

module.exports.test = {

    test : test = {
        keyword : "ali.",
        content : "123456789098765fghgsjhfasfk"
    },
    
    queryTest : queryTest = {
        keyword : "ali.pay",
        offset : 0,
        limit : 20
    }
}

