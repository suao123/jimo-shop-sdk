const http = require('../../utils/axios');
const api = "/users/"

module.exports.api = {
    banUser : banUser =  async (userId) => {
        const data = await http.post(api + userId +"/ban", {}, 1) 
        return data
    },
    
    unbanUser : unbanUser =  async (userId)  =>{
        const data = await http.post(api + userId +"/unban", {}, 1)
        return data
    }
}

