let axios = require('axios')
let qs = require('qs')
let url_seg = require('../config/urlConfig')

const get = async function(api, parameters, flag){
    try{
        var url = isBeckend(flag) + api;

        let res = await axios.get(url, {
            params: parameters,
            timeout: 10000
        })
        var status = res.status
        var data = { 
            data : res.data,
            status : res.status
        }
        return new Promise((resolve) => {
            if(status == 200) {
                resolve(data);
            } else {
                resolve(data)
            }
        })
    } catch (err) {
        console.log("服务器出错")
        console.log(err)
    }
}

const post = async function(api, parameters, flag){
    try{
        var url = isBeckend(flag) + api;
        let res = await axios.post(url, qs.stringify(parameters),
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            }, {
                timeout: 10000
            }
        )

        var status = res.status
        var data = { 
            data : res.data,
            status : res.status
        }

        return new Promise((resolve) => {
            if(status == 200) {
                resolve(data);
            } else {
                resolve(data)
            }
        })
    } catch(err) {
        console.log('服务器出错')
        console.log(err)
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

        var status = res.status
        var data = { 
            data : res.data,
            status : res.status
        }

        return new Promise((resolve) => {
            if(status == 200) {
                resolve(data);
            } else {
                resolve(data)
            }
        })
    } catch (err) {
        console.log('服务器出错')
        console.log(err)
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