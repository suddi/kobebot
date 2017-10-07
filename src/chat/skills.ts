const talkify: any = require('talkify');

import Actions from './actions';

const BotTypes: any = talkify.BotTypes;
const Skill: any = BotTypes.Skill;

class Skills {
    public static get(bot: any): void {
        bot.addSkill(new Skill('helloSkill', 'hello', Actions.handleHello));
        return bot.addSkill(new Skill('howAreYouSkill', 'how_are_you', Actions.handleHowAreYou));
    }
}

export default Skills;
