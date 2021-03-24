const http = require('../utils/axios');

const getWallet = async function() {
    var data;
    data = await http.get("/users/1/wallet",{});
    return Promise.resolve(data);
}

module.exports.getWallet = getWallet;