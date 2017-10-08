'use strict';

import * as _ from 'lodash';

// No type validation
const talkify: any = require('talkify');

import Skills from './skills';
import Training from './training';

const BotTypes = talkify.BotTypes;
const TrainingDocument = BotTypes.TrainingDocument;

export interface ChatMessage {
    type: string,
    content: string
}

class Chat {
    public static init(): any {
        const bot: any = new talkify.Bot();
        bot.trainAll(Chat.getTrainingDocuments(), Skills.get.bind(null, bot));
        return bot;
    }

    private static getTrainingDocuments(): string[] {
        return _.flatten(_.map(Training.get(), (trainingDataSet: string[], topicName: string) => {
            return trainingDataSet.map((trainingData: string): any => {
                return new TrainingDocument(topicName, trainingData);
            });
        }));
    }
}

export default Chat;
