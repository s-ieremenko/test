const sendMessage = require("../sendMessage");
const sendPhoto= require("../sendPhoto");
const messageParts = require("../messageParts");
const { getRandomPhoto } = require("../photoParts");

exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);
    const { command, botName, extra } = messageParts(message.text);

    if (botName === "myTest_bot" || botName === null) {
        switch (command) {
            case "echo":
                await sendMessage(message.chat.id, extra || 'ECHO');
                break;
            case "photo":
                const photo = await getRandomPhoto()
                await sendPhoto(message.chat.id, photo );
                break;
            default:
                await sendMessage(message.chat.id, "I don't understand that command.");
        }
    }

    return { statusCode: 200 };
};



