'use strict';

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram('435065298:AAEK7nnZGVAniVls70mp-Aq2LebUuVKjgC8');

class PingController extends TelegramBaseController {
	/**
     * @param {Scope} $
     */
	pingHandler($) {
		$.sendMessage('pong');
	}

	get routes() {
		return {
			'pingCommand': 'pingHandler'
		};
	}
}

tg.router
	.when(11
		new TextCommand('ping', 'pingCommand'),
		new PingController()
	);