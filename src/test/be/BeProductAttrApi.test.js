const expect = require('chai').expect;
const productAttrApi = require('../../rest/be/BeProductAttrApi')



/**
 * 测试数据
 */
attrValueTest = {
    id : 1,
    name : "测试",
    description : "测试测试12321",
    sort : 0
}

attrValuesTest = {
    attrId : 1
}

attrValuesTest['valueForms[0].attrId'] = 1
attrValuesTest['valueForms[0].id'] = 1
attrValuesTest['valueForms[0].name'] = "那么"
attrValuesTest['valueForms[0].description'] = "测试测试"
attrValuesTest['valueForms[0].sort'] = 100

test = {
    // id : 1,
    name : "测试111111",
    description : "测试测试",
    merchantId : 1,
}

test['attrValues[0].attrId'] = 1
test['attrValues[0].name'] = "那么"
test['attrValues[0].description'] = "测试测试"
test['attrValues[0].sort'] = 0

updateTest = {
    id : 1,
    name : "测试11342311",
    description : "测试测试",
    merchantId : 1, 
}

updateTest['attrValues[0].attrId'] = 1
updateTest['attrValues[0].id'] = 1
updateTest['attrValues[0].name'] = "那么"
updateTest['attrValues[0].description'] = "测试测试"
updateTest['attrValues[0].sort'] = 1

describe('后端商品销售api测试', async () => {

    it('添加 productAttr', async () => {
        var res = await productAttrApi.api.addProductAttr(test)

        expect(res.status).to.be.equal(200)
    })

    it("更新 productAttr", async () => {
        var res = await productAttrApi.api.updateProductAttr(1, updateTest)

        expect(res.status).to.be.equal(200)
        expect(res.data.id).to.be.equal(1)
    })

    it('查询 列表', async () => {
        var res = await productAttrApi.api.queryProductAttr("测试11342311")

        expect(res.status).to.be.equal(200)
        expect(res.data).to.be.includes.keys('total')
    })

    it('查询 attr 详情', async () => {
        var res = await productAttrApi.api.getOneProductAttr(1)
        
        expect(res.status).to.be.equal(200)
        expect(res.data.id).to.be.equal(1)
    })

    it('删除 ProductAttr', async () => {
        var res = await productAttrApi.api.deleteProductAttr(2)

        expect(res.status).to.be.equal(200)
    })

    it('查询 attr value list', async () => {
        var res = await productAttrApi.api.getAttrValues(1)
        
        expect(res.status).to.be.equal(200)
        expect(res.data[0].attrId).to.be.equal(1)
    })

    it('更新 attrId 下的 value 列表', async () => {
        var res = await productAttrApi.api.updateAttrValues(1, attrValuesTest)

        expect(res.status).to.be.equal(200)
        expect(res.data[0].attrId).to.be.equal(1)
    })

    it('更新 attrId 下的 value id', async () => {
        var res = await productAttrApi.api.updateAttrValue(2, 1, attrValueTest)

        expect(res.status).to.be.equal(200)
        expect(res.data.attrId).to.be.equal(2)
    })

    it('删除 attrId 下的 value id', async () => {
        var res = await productAttrApi.api.deleteAttrValue(100, 21)

        expect(res.status).to.be.equal(200)
    })
})