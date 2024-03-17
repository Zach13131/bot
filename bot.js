const TelegramBot = require("node-telegram-bot-api");

const token = "6882067171:AAFh_nybHBQEOn5xMoTQLB-06_7-c0n5A5M"; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === "/start") {
    bot.sendMessage(chatId, "Welcome to the bot! yo");
  }
});
