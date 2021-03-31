let axios = require('axios')
let qs = require('qs')
let url_seg = require('../config/urlConfig')

axios.default.timeout = 10000;

const get = async function(api, parameters, flag){
    try{
        var url = isBeckend(flag) + api;

        let res = await axios.get(url, parameters)

        return getData(res)

    } catch (error) {
        var data = getData(error.response.data)
        return data
    }
}

const post = async function(api, parameters, flag){
    try{
        var url = isBeckend(flag) + api;

        let res = await axios.post(url, qs.stringify(parameters),
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }
        )

        return getData(res)

    } catch(error) {
        return getData(error.response.data)
    }
    
}

const toDelete = async function (api, parameters, flag) {
    try {
        var url = isBeckend(flag) + api;
        let res = await axios.delete(url, qs.stringify(parameters),
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }, {
                timeout: 10000
            }
        )

        return getData(res)

    } catch (error) {
        return getData(error.response.data)
    }
}

const  getData = (res) => {
    var data = {
        status : res.status
    }
    if (res.status == 200) {
        data.data = res.data
        return new Promise((resolve) => {
            resolve(data)
        })
    } else {
        data.data = res.message
        return data
    }
    
}

const isBeckend = (flag) => {
    if(flag){
        return url_seg.burl
    } else {
        return url_seg.url
    }
}

module.exports.post = post;
module.exports.get = get;
module.exports.delete = toDelete;