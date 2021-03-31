const expect = require('chai').expect;
const couponApi = require('../../rest/an/CouponApi')

describe('优惠券api测试', async () => {

    it('获取我的优惠券', async () => {
        var userId = couponApi.test.test.userId
        var userCouponQueryForm = couponApi.test.test
        var res = await couponApi.api.getCouponByUserId(userCouponQueryForm)

        expect(res.status).to.be.equal(200)
        expect(res.data[0].userId).to.be.equal(userId)
    })

    it('兑换优惠券', async () => {
        var res = await couponApi.api.exchangeCoupon(1, "testt")

        expect(res.status).to.be.equal(200)
    })
})