require('dotenv').config()
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const { CommandHandler } = require('./src/handlers/commandHandler')
const { CallbackHandler } = require('./src/handlers/callbackHandler')


const bot = new Telegraf(process.env.BOT_TOKEN)

CommandHandler(bot)
CallbackHandler(bot)

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
