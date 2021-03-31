const http = require("../../utils/axios")
const api = "/coupons/"

module.exports.api = {

    getCouponByUserId : getCouponByUserId = async (userCouponQueryForm) => {
        var data = await http.get(api + "byUserId", userCouponQueryForm, 0)
        return data
    },
    
    exchangeCoupon : exchangeCoupon = async (userId, code) => {
        var exchangeForm = {
            userId : userId,
            code : code
        }
        var data = await http.post(api + "exchange", exchangeForm, 0)
        return data
    }
}


module.exports.test = {
    test : test = {
        userId : 1,
        status : 0
    }
}

