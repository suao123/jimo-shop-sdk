const http = require("../../utils/axios")
const api = "/coupons/"


module.exports.api = {

    add : add = async function (couponForm) {
        const data = await http.post(api, couponForm)
        return data
    },
    
    update : update = async function (couponId, couponForm) {
        const data = await http.post(api + couponId, couponForm)
        return data
    },
    
    query : query = async function (queryForm) {
        const data = await http.get(api + "query",queryForm)
        return data
    },
    
    deleteCoupon : deleteCoupon = async function(couponId) {
        const data = await http.post(api + couponId + "/delete", {})
        return data
    },
    
    upCoupon : upCoupon = async function(couponId) {
        const data = await http.post(api + couponId + "/up", {})
        return data
    },
    
    
    downCoupon : downCoupon = async function(couponId) {
        const data = await http.post(api + couponId + "/down", {})
        return data
    },
    
    couponRecords : couponRecords = async function(couponId, couponRecordQueryForm) {
        const data = await http.get(api + couponId + "/records",  couponRecordQueryForm)
        return data
    }
    
}

module.exports.test = {
    queryTest : queryTest = {
        code : 'testt',
    },
    
    test : test = {
        reduceMoney : 100,
        fullMoney : 500,
        des : '测试测试测试',
        code : 'testt',
        effectiveStartTime : 1616985025000,
        effectiveEndTime : 1619663425000,
        startTime : 1616985025000,
        endTime : 1619663425000,
        validTime : 10000000,
        totalNum : 100,
        remainNum : 100,
        sort : 1,
        status : 1 
    },
    
    updateTest : updateTest = {
        id : 10,
        reduceMoney : 100,
        fullMoney : 5000,
        des : '测试测试测试',
        code : 'testt',
        effectiveStartTime : 1616985025000,
        effectiveEndTime : 1619663425000,
        startTime : 1616985025000,
        endTime : 1619663425000,
        validTime : 10000000,
        totalNum : 100,
        remainNum : 100,
        sort : 1,
        status : 1 
    }
}


