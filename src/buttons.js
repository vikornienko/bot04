const Telegraf = require('telegraf');
const { button } = require('telegraf/markup');
const { Markup } = Telegraf

module.exports.InlineKeyboard = {
  buttons_start: () => {
    return Markup.inlineKeyboard([
      Markup.button.callback("Список RSS", "listRss"),
    ])
  },
  buttons_source: () => {
    return Markup.inlineKeyboard([
      Markup.button.callback("Reddit", "redditRss"),
    ])
  },
  buttons_back: () => {
    return Markup.inlineKeyboard([
      Markup.button.callback('Back', 'back')
    ])
  }
};