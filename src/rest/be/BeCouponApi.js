const http = require("../../utils/axios")
const api = "/coupons/"


module.exports.api = {

    add : add = async function (couponForm) {
        const data = await http.post(api, couponForm, 1)
        return data
    },
    
    update : update = async function (couponId, couponForm) {
        const data = await http.post(api + couponId, couponForm, 1)
        return data
    },
    
    query : query = async function (queryForm) {
        const data = await http.get(api + "query",queryForm, 1)
        return data
    },
    
    deleteCoupon : deleteCoupon = async function(couponId) {
        const data = await http.post(api + couponId + "/delete", {}, 1)
        return data
    },
    
    upCoupon : upCoupon = async function(couponId) {
        const data = await http.post(api + couponId + "/up", {}, 1)
        return data
    },
    
    
    downCoupon : downCoupon = async function(couponId) {
        const data = await http.post(api + couponId + "/down", {}, 1)
        return data
    },
    
    couponRecords : couponRecords = async function(couponId, couponRecordQueryForm) {
        const data = await http.get(api + couponId + "/records",  couponRecordQueryForm, 1)
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
        id : 2,
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


