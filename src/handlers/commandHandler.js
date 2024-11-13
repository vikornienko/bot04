const { InlineKeyboard } = require('../buttons')

module.exports.CommandHandler = (bot) => {
    bot.start(async (ctx) => {
        await ctx.replyWithHTML(
            "Привет! Я бот для чтения RSS. Список RSS можно получить нажав на кнопку ниже.",
            InlineKeyboard.buttons_start()
        )
    });
    bot.help(async (ctx) => {
        ctx.reply("Send me a sticker")
    });
}