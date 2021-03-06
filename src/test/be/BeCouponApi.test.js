const expect = require('chai').expect;
const beCouponApi = require('../../rest/be/BeCouponApi')

describe('后台优惠券api测试', async () => {

    it('添加优惠券', async () => {
        var couponForm = beCouponApi.test.test
        var res = await beCouponApi.api.add(couponForm)
        expect(res.status).to.be.equal(200)
        expect(res.data).to.include.keys('id')
    })

    it('更新优惠券', async () => {
        couponId = beCouponApi.test.updateTest.id
        couponForm = beCouponApi.test.updateTest
        var res = await beCouponApi.api.update(couponId , couponForm)
        expect(res.status).to.be.equal(200)
        expect(res.data.fullMoney).to.be.equal(5000)
    })

    it('删除优惠券', async () => {
        var res = await beCouponApi.api.deleteCoupon(2)
        expect(res.status).to.be.equal(200)
    })

    it('查询优惠券列表', async () => {
        var queryForm = beCouponApi.test.queryTest
        var res = await beCouponApi.api.query(queryForm)
        expect(res.status).to.be.equal(200)
        expect(res.data).to.include.keys('total')
    })

    it('查询领取记录', async () => {
        var res = await beCouponApi.api.couponRecords(1, {})
        expect(res.status).to.be.equal(200)
        expect(res.data).to.include.keys('total')
    })

    it('上架优惠券', async () => {
        var res = await beCouponApi.api.upCoupon(1)
        expect(res.status).to.be.equal(200)
    })

    it('下架优惠券', async () => {
        var res = await beCouponApi.api.downCoupon(1)
        expect(res.status).to.be.equal(200)
    })
})