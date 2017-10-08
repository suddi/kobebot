'use strict';

import {expect} from 'chai';

import Chat from '../chat';
import {ChatMessage} from '../chat';

const POSSIBLE_MESSAGE_TYPES = ['SingleLine', 'MultiLine'];

function messageResolver(chatter: any, chatId: string, messageText: string): Promise<ChatMessage[] | Error> {
    return new Promise(function (resolve: (messages: ChatMessage[]) => void, reject: (err: Error) => void): void {
        return chatter.resolve(chatId, messageText, function (err: Error | null, messages: ChatMessage[]) {
            if (err) {
                return reject(err);
            }
            return resolve(messages);
        });
    });
}

describe('Integration tests for chatbot', function () {
    it('CASE 1: Should respond correctly to messages', function () {
        const chatter: any = Chat.init();

        messageResolver(chatter, '1', 'How about we play?')
        .then(function (messages: ChatMessage[]) {
            messages.map(function (message: ChatMessage): void {
                expect(message.type).to.be.oneOf(POSSIBLE_MESSAGE_TYPES);
                expect(message.content).to.be.a('string');
            });
        });
    });
});
