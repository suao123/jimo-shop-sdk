const expect = require('chai').expect;
const userAddressApi = require('../../rest/an/UserAddressApi')

describe('用户地址api测试', async() => {
    
    it('添加地址', async () => {
        var userId = 1
        var userAddressForm = userAddressApi.test.test
        var res = await userAddressApi.api.addAddress(userId, userAddressForm)
        
        expect(res.status).to.be.equal(200)
        expect(res.data.userId).to.be.equal(userId)
    })

    it('修改地址', async () => {
        var userId = 1
        var addressId = 2
        var userAddressForm = userAddressApi.test.updateTest
        var res = await userAddressApi.api.updateAddress(userId, addressId, userAddressForm)

        expect(res.status).to.be.equal(200)
        expect(res.data.zipCode).to.be.equal(userAddressForm.zipCode)
    })

    it('删除地址', async () => {
        var userId = 1
        var addressId = 2
        var res = await userAddressApi.api.deleteAddress(userId, addressId)

        expect(res.status).to.be.equal(200)
    })

    it('获取我的地址', async () => {
        var userId = 1
        var res = await userAddressApi.api.getAddress(userId)

        expect(res.status).to.be.equal(200)
        expect(res.data[0].userId).to.be.equal(userId)
    })

    it('设置默认地址', async () => {
        var userId = 1
        var addressId = 1
        var res = await userAddressApi.api.setDefaultAddress(userId, addressId)

        expect(res.status).to.be.equal(200)
    })


    it('获取默认地址', async () => {
        var userId = 1
        var res = await userAddressApi.api.getDefaultAddress(userId)

        expect(res.status).to.be.equal(200)
        expect(res.data.userId).to.be.equal(userId)
    })
})