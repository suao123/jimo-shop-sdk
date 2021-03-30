const http = require("../../utils/axios")
const api = "/routes/"

module.exports.api = {
    addRoute : addRoute = async function (routeForm) {
        const data = await http.post(api, routeForm, 1)
        return data
    },
    
    updateRoute : updateRoute = async function(routeId, routeForm) {
        const data = await http.post(api + routeId, routeForm, 1) 
        return data
    },
    
    deleteRoute : deleteRoute = async function(routeId) {
        const data = await http.delete(api + routeId, {}, 1)
        return data
    }
}

module.exports.test = {

    test : test = {
        description : "测试测试测试",
        type : 0,
        route : "/test" 
    },
    
    updateTest : updateTest = {
        routeId : 2,
        description : "test测试测试",
        type : 1,
        route : "/test" 
    }
}