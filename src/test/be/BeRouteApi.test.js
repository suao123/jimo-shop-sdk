const expect = require('chai').expect;
const beRouteApi = require('../../rest/be/BeRouteApi')

describe('后台路由api测试', async () => {

    it('新增route', async () => {
        var routeForm = beRouteApi.test.test
        var res = await beRouteApi.api.addRoute(routeForm)
        expect(res.status).to.be.equal(200)
    })

    it('修改route', async () => {
        var routeId = beRouteApi.test.updateTest.routeId
        var routeForm = beRouteApi.test.updateTest
        var res = await beRouteApi.api.updateRoute(routeId ,routeForm)
        expect(res.status).to.be.equal(200)
    })

    it('删除route', async () => {
        var res = await beRouteApi.api.deleteRoute(1)
        expect(res.status).to.be.equal(200)
    })

})