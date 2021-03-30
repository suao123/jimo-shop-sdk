const expect = require('chai').expect;
const settingApi = require('../../rest/be/BeSettingsApi')

describe('后端设置api测试', async () => {

    it('保存配置', async () => {
        var keyword = settingApi.test.test.keyword
        var content = settingApi.test.test.content
        var res = await settingApi.api.saveSetting(keyword, content)
        expect(res.status).to.be.equal(200)
        expect(res.data.keyword).to.be.equal(keyword)
        expect(res.data.content).to.be.equal(content)
    })

    it('查询设置列表', async () => {
        var keyword = settingApi.test.test.keyword
        var content = settingApi.test.test.content
        var offset = 0
        var limit = 20
        var res = await settingApi.api.table(keyword, offset, limit)
        var id = res.data.total - 1

        expect(res.status).to.be.equal(200)
        expect(res.data.list[id].keyword).to.be.equal(keyword)
        expect(res.data.list[id].content).to.be.equal(content)
    })

    it('获取配置', async () => {
        var keyword = settingApi.test.test.keyword
        var content = settingApi.test.test.content
        var res = await settingApi.api.getSettings(keyword)

        expect(res.status).to.be.equal(200)
        expect(res.data.keyword).to.be.equal(keyword)
        expect(res.data.content).to.be.equal(content)
    })

    it('保存+获取配置', async () => {
        var keyword = settingApi.test.test.keyword
        var content = settingApi.test.test.content
        var res = await settingApi.api.saveSetting(keyword, content)

        expect(res.status).to.be.equal(200)
        expect(res.data.keyword).to.be.equal(keyword)
        expect(res.data.content).to.be.equal(content)

        var res = await settingApi.api.getSettings(keyword)

        expect(res.status).to.be.equal(200)
        expect(res.data.keyword).to.be.equal(keyword)
        expect(res.data.content).to.be.equal(content)

    })
})