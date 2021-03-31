const http = require("../../utils/axios")
const api = "/users/"

module.exports.api = {
    addAddress : addAddress = async (userId, userAddressForm) => {
        var data = await http.post(api + userId + "/addresses", userAddressForm, 0)
        return data
    },
    
    updateAddress : updateAddress = async (userId, addressId,userAddressForm) => {
        var data = await http.post(api + userId + "/addresses/" + addressId, userAddressForm, 0)
        return data
    },
    
    deleteAddress : deleteAddress = async (userId, addressId) =>{
        var data = await http.delete(api + userId + "/addresses/" + addressId, {}, 0)
        return data
    },
    
    setDefaultAddress : setDefaultAddress = async (userId, addressId) => {
        var addressForm = {
            addressId : addressId
        }
        var data = await http.post(api + userId + "/addresses/default", addressForm, 0)
        return data
    },
    
    getDefaultAddress : getDefaultAddress = async (userId) => {
        var data = await http.get(api + userId + "/addresses/default", {}, 0)
        return data
    },
    
    getAddress : getAddress = async (userId) => {
        var data = await http.get(api + userId + "/addresses", {}, 0)
        return data
    }
}

module.exports.test = {
    test : test = {
        name : "小花",
        phone : "12345678909",
        province : "浙江省",
        city : "杭州市",
        area : "余杭区",
        address : "杭州小火堆",
        zipCode : "12312",
        defaultIn : 0,
        tag : 0
    },
    
    updateTest : updateTest = {
        name : "小花",
        phone : "12345678909",
        province : "浙江省",
        city : "杭州市",
        area : "余杭区",
        address : "杭州小火堆",
        zipCode : "111112",
        defaultIn : 0,
        tag : 0
    }
}

