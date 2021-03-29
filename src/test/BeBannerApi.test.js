const expect = require('chai').expect;
const beBannerApi = require('../rest/be/BeBannerApi')

describe('后台广告栏api测试', async() => {

    it('添加banner', async() =>  {
        var res = await beBannerApi.api.addBanner(beBannerApi.api.test)
        expect(res.status).to.be.equal(200)
        expect(res.data).to.include.keys('id')
    })

    it('修改banner', async () => {
        var bannerForm = beBannerApi.api.updateTest
        var bannerId = beBannerApi.api.updateTest.id
        var res = await beBannerApi.api.updateBanner(bannerId ,bannerForm)
        expect(res.status).to.be.equal(200)
        expect(res.data).to.include.keys('id')
        expect(res.data.description).to.be.equal('测试测试测试')
    })

    it('删除banner', async () => {
        var res = await beBannerApi.api.deleteBanner(37)
        expect(res.status).to.be.equal(200)
    })

    it('查询所有banner', async () => {
        var res = await beBannerApi.api.getBanners()
        expect(res.status).to.be.equal(200)
        expect(res).to.include.keys("status")
    })

    it('查询banner通过id', async () => {
        var res = await beBannerApi.api.getBannerById(38)
        expect(res.status).to.be.equal(200)
        expect(res.data.id).to.be.equal(38)
    })

    it('上架 banner', async () => {
        var res = await beBannerApi.api.upBanner(38)
        expect(res.status).to.be.equal(200)
        res = await beBannerApi.api.getBannerById(38)
        expect(res.status).to.be.equal(200)
        expect(res.data.status).to.be.equal(1)
    })

    it('下架 banner', async () => {
        var res = await beBannerApi.api.downBanner(38)
        expect(res.status).to.be.equal(200)
        res = await beBannerApi.api.getBannerById(38)
        expect(res.status).to.be.equal(200)
        expect(res.data.status).to.be.equal(0)
    })
})