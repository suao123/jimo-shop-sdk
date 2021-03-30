const expect = require('chai').expect;
const bannerApi = require('../../rest/an/BannerApi')

describe('广告栏测试', async () => {

    it('app根据位置获取banner列表', async () => {
        var res = await bannerApi.api.getBannersByPosition(1)
        
        expect(res.status).to.be.equal(200)
        expect(res.data[0].position).to.be.equal(1)
    })
})