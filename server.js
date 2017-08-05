'use strict';

const TelegramBot = require('node-telegram-bot-api'),
      request = require('request'),
      fs = require('fs'),
      token = 'YOUR TOKEN', 
      bot = new TelegramBot(token, {polling:true});

bot.on('message', function(msg) {
    var chatId = msg.chat.id;

    switch (msg.text) {
        case '/start':
        start(chatId);
        break;
        
    }

});

//handling callback query 
bot.on('callback_query', function onCallbackQuery(callbackQuery) {
	const action = callbackQuery.data;
	const msg = callbackQuery.message;
	const opts = {
		chat_id: msg.chat.id,
		message_id: msg.message_id,
	};
	let text;

switch (action) {
	case'1':
	text = 'Edited Text';
	break;
}

bot.editMessageText(text, opts);
});


function start(chatId) {
    bot.sendMessage(chatId, 'Привет, ' + ', я бот, и я могу быстро записать тебя в твой любимый салон красоты!) ', {
        "reply_markup": JSON.stringify ({
            inline_keyboard: [
            [{text: 'Записатся', callback_data: '1'}], 
            [{text: 'Отменить запись', callback_data: '2'}], 
            [{text: 'Цены', callback_data: '3'}]
            ]
        })
    });
} 

function price(chatId) {
    bot.editMessageText(chatId, '100565050долларов');
}

function canceling(chatId) {
	bot.sendMessage(chatId, 'Вы подтверждаете отмену записи?', {
		"reply_markup": JSON.stringify ({
            inline_keyboard: [
            [{text: 'Подтверждаю', callback_data: '4'}], 
            [{text: 'Нет', callback_data: '5'}], 
            ]
        })
    });
} 

function services(chatId) {
	bot.sendMessage(chatId, {
		"reply_markup": JSON.stringify ({
            inline_keyboard: [
            [{text: 'Стрижка', callback_data: '6'}], 
            [{text: 'Покраска', callback_data: '7'}], 
            [{text: 'Укладка', callback_data: '8'}]
            [{text: 'Маникюр', callback_data: '9'}], 
            [{text: 'Массаж', callback_data: '10'}], 
            ]
        })
    });
} 