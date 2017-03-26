'use strict';

import * as _ from 'lodash';

// No type validation
const talkify = require('talkify');

import Skills from './skills';
import Training from './training';

const BotTypes = talkify.BotTypes;
const TrainingDocument = BotTypes.TrainingDocument;

class Chat {
    private static getTrainingDocuments(): any {
        return _.flatten(_.map(Training.get(), function (trainingDataSet: Array<string>, topicName: string) {
            return trainingDataSet.map(function (trainingData: string) {
                return new TrainingDocument(topicName, trainingData);
            });
        }));
    }

    static init(): any {
        const bot = new talkify.Bot();
        bot.trainAll(Chat.getTrainingDocuments(), Skills.get.bind(null, bot, ));
        return bot;
    }
}

export default Chat;
