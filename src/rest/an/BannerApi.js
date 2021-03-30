const http = require("../../utils/axios")
const api = "/banners/"

module.exports.api = {
    getBannersByPosition : getBannersByPosition = async (position) => {
        var positionParam = {
            position : position
        }
        var data = await http.get(api, positionParam, 0)
        return data
    }
} 