const http = require("../../utils/axios")
const api = "/product/attrs/"

module.exports.api = {

    addProductAttr : addProductAttr = async (productAttrForm) => {
        var data = await http.post(api, productAttrForm, 1)
        return data
    },
    
    updateProductAttr : updateProductAttr = async (attrId ,productAttrForm) => {
        var data = await http.post(api + attrId, productAttrForm, 1)
        return data
    },
    
    queryProductAttr : queryProductAttr = async (name) => {
        var productAttrQueryForm = {
            name : name
        }
        var data = await http.get(api + "query", productAttrQueryForm, 1)
        return data
    },
    
    getOneProductAttr : getOneProductAttr = async (attrId) => {
        var data = await http.get(api + attrId, {}, 1)
        return data
    },
    
    deleteProductAttr : deleteProductAttr = async (attrId) => {
        var data = await http.post(api + attrId + "/delete", {}, 1)
        return data
    },
    
    getAttrValues : getAttrValues = async (attrId) =>{
        var data = await http.get(api + attrId + "/values", {}, 1)
        return data
    },
    
    updateAttrValues : updateAttrValues = async (attrId, attrValuesForm) => {
        var data = await http.post(api + attrId + "/values", attrValuesForm, 1)
        return data
    },
    
    updateAttrValue : updateAttrValue = async (attrId, attrValueId, attrValueForm) => {
        var data = await http.post(api + attrId + "/values/" + attrValueId, attrValueForm, 1)
        return data
    },
    
    deleteAttrValue : deleteAttrValue = async (attrId, attrValueId) => {
        var data = await http.post(api + attrId + "/values/" + attrValueId + "/delete", {}, 1)
        return data 
    }
}