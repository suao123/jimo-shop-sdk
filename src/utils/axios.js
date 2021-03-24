let axios = require('axios');
let url_seg = require('../config/urlConfig')

const get = async function(api, parameters){
    var data;
    var url = url_seg.url + api;
    await axios.get(url, {
        params: parameters,
        timeout: 10000
    })
    .then(function(response){
        data = response.data;
    })
    .catch(function(error) {
        console.log(error);
    });
    return data;
}

const post = async function(api, parameters){
    var data;
    var url = url_seg.url + api;
    await axios.post(url, {
        params: parameters,
        timeout: 10000
    })
    .then(function(response){
        data = response.data;
    })
    .catch(function(error){
        console.log(error);
    });
    return data;
}

module.exports.post = post;
module.exports.get = get;