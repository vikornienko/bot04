const Parser = require('rss-parser')

const { InlineKeyboard } = require('../buttons')


module.exports.CallbackHandler = (bot) => {
    bot.on('callback_query', async (ctx) => {
        const { callbackQuery } = ctx

        if (callbackQuery.data === 'listRss') {
            await ctx.editMessageText('Выбери источник', InlineKeyboard.buttons_source())
        };

        if (callbackQuery.data === "redditRss") {
          const parser = new Parser();

          let feed = await parser.parseURL("https://www.reddit.com/.rss");
          
          const newsList = feed.items.map(item => item.title);
          const newsMessageText = newsList.join('\n\n');
          await ctx.editMessageText(`<b>Reddit News: </b>\n\n${newsMessageText}`,
            InlineKeyboard.buttons_back()
          )
        }
    })
}