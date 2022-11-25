const axios = require("axios").default;

module.exports = async (chat_id, photo) => {
    await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendPhoto`, {
        chat_id,
        photo,
        caption: "Here is a new picture!"
    });

    return true;
};