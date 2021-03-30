const http = require("../../utils/axios")
const api = "/banners/"

module.exports.api = {
    getBanners : getBanners = async function() {
                        const data = await http.get(api, {},1)
                        return data
                    },
    
    getBannerById : getBannerById = async function(bannerId) {
        const data = await http.get(api + bannerId, {}, 1)
        return data
    },
    
    addBanner : addBanner = async function(bannerForm) {
        const data = await http.post(api, bannerForm, 1)
        return data
    },
    
    updateBanner : updateBanner = async function (bannerId, bannerForm) {
        const data = await http.post(api + bannerId, bannerForm, 1)
        return data
    },
    
    deleteBanner : deleteBanner = async function(bannerId) {
        const data = await http.delete(api + bannerId, {}, 1)
        return data
    },
    
    upBanner : upBanner = async function(bannerId) {
        const data = await http.post(api + bannerId + "/up", {}, 1)
        return data
    },
    
    downBanner : downBanner = async function(bannerId) {
        const data = await http.post(api + bannerId + "/down", {}, 1)
        return data
    }
}

module.exports.test = {
    test : test = {
        title: "1gdgfdg23",
        imgUrl: "123",
        description: "测试111111111开发",
        position: "123",
        status: "0",
        sort: "0",
        routeId: "1",
        targetId: "1",
        paths: "123path",
        color: "red"
    },

    updateTest : updateTest = {
        id : 1,
        title: "1gdgfdg23",
        imgUrl: "123",
        description: "测试测试测试",
        position: "123",
        status: "0",
        sort: "0",
        routeId: "1",
        targetId: "1",
        paths: "123path",
        color: "red"
    }
}
