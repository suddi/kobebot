const BotTypes = require('talkify').BotTypes;

const Skill = BotTypes.Skill;
const SingleLineMessage = BotTypes.SingleLineMessage;

class Action {
    static hello(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage('Hi! My name is Kobe');
        return next();
    }
}

class Skills {
    static get(bot: any): void {
        bot.addSkill(new Skill('helloSkill', 'hello', Action.hello));
    }
}

export default Skills;
