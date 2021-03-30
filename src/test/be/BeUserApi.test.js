const expect = require('chai').expect;
const userApi = require('../../rest/be/BeUserApi')

describe('后端用户api测试', async () => {
    it('禁止登录', async () => {
        var res = await userApi.api.banUser(1)

        expect(res.status).to.be.equal(200)
    })

    it('取消禁止登录', async () => {
        var res = await userApi.api.unbanUser(1)

        expect(res.status).to.be.equal(200)
    })
})