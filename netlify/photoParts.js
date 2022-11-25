const axios = require("axios").default;
const getRandomPhoto = async () => {
    try {
        const response = await axios.get('https://picsum.photos/200/300', { responseType: 'arraybuffer' });
        return  response.request.res.responseUrl


    } catch (e) {
        console.log(e)
    }
}

module.exports = { getRandomPhoto }