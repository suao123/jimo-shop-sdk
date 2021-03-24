const expect = require('chai').expect;
const http = require('../utils/axios');
const url = require('../config/urlConfig');

describe('test1', function() {
    var testUrl = url.url + "users/26/wallet";
    it('test2', async () => {
        let data = await http.get(testUrl, {});
        expect(data).to.include.keys('userId');
    })
})
