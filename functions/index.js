const { instance } = require("./request");
const utilsController = require("../controller/utils");

const sampleRequestFunction = async (payload) => {
    try {
        const response = await instance.post("/user_info", payload);
        return { status, data } = response.data;
    } catch (error) {
        return {
            "status": "error"
        }
    }
}

module.exports = {
    sampleRequestFunction, 
}