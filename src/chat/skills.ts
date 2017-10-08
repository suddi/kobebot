'use strict';

const talkify: any = require('talkify');

import Actions from './actions';

const BotTypes: any = talkify.BotTypes;
const Skill: any = BotTypes.Skill;

class Skills {
    public static get(bot: any): void {
        bot.addSkill(new Skill('howAreYouSkill', 'how_are_you', Actions.handleHowAreYou));
        bot.addSkill(new Skill('helpSkill', 'help', Actions.handleHelp));
        bot.addSkill(new Skill('helloSkill', 'hello', Actions.handleHello));
        bot.addSkill(new Skill('terribleDaySkill', 'terrible_day', Actions.handleTerribleDay));
        bot.addSkill(new Skill('foodSkill', 'food', Actions.handleFoodSkill));
        bot.addSkill(new Skill('tiredSkill', 'tired', Actions.handleTired));
        bot.addSkill(new Skill('protectSkill', 'protect', Actions.handleProtect));
        bot.addSkill(new Skill('biteMeSkill', 'bite_me', Actions.handleBiteMe));
        bot.addSkill(new Skill('playingSkill', 'playing', Actions.handlePlaying));
        bot.addSkill(new Skill('sureSkill', 'sure', Actions.handleSure));
        bot.addSkill(new Skill('almostThereSkill', 'almost_there', Actions.handleAlmostThere));
        bot.addSkill(new Skill('locationSkill', 'location', Actions.handleLocation));
        bot.addSkill(new Skill('nothingSkill', 'nothing', Actions.handleNothing));
        bot.addSkill(new Skill('dontKnowSkill', 'dont_know', Actions.handleDontKnow));
        bot.addSkill(new Skill('canYouBuySkill', 'can_you_buy', Actions.handleCanYouBuy));
        bot.addSkill(new Skill('forgotSkill', 'forgot', Actions.handleForgot));
    }
}

export default Skills;
