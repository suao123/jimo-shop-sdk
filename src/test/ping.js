let axios = require("axios");

const getTest = async function(){
    var data;
    await axios.get("http://localhost:9000/v1/users/26/wallet", {
        params: {},
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



module.exports.getTest = getTest;

