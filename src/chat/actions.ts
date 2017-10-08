'use strict';

const talkify: any = require('talkify');

const BotTypes: any = talkify.BotTypes;
const SingleLineMessage: any = BotTypes.SingleLineMessage;
const MultiLineMessage: any = BotTypes.MultiLineMessage;

class Actions {
    public static handleHello(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage('Ruff! My name is Kobe');
        return next();
    }

    public static handleHowAreYou(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            'Soooo good, I just got my favorite treat',
            'Hmmmm, wanna play fetch?'
        ]);
        return next();
    }

    public static handleHelp(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            'How can I help?',
            'I can fetch the teddy for you'
        ]);
        return next();
    }

    public static handleTerribleDay(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            'Sorry to hear that',
            'Come here, we can play fetch'
        ]);
        return next();
    }

    public static handleFoodSkill(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            "Ohhhh, I'm so hungry",
            'Can you feed me some treats'
        ]);
        return next();
    }

    public static handleTired(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage('Never mind that, the neighbour is outside... gotta bark at him');
        return next();
    }

    public static handleProtect(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage('Woof!');
        return next();
    }

    public static handleBiteMe(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            "I'm sorry",
            "I didn't mean too"
        ]);
        return next();
    }

    public static handlePlaying(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage("Yay!!!! Let's play");
        return next();
    }

    public static handleSure(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage("You're awesome");
        return next();
    }

    public static handleAlmostThere(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            'Come home...',
            'I want to play'
        ]);
        return next();
    }

    public static handleLocation(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage('When are you coming home?');
        return next();
    }

    public static handleNothing(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            "That's okay",
            "You're the best"
        ]);
        return next();
    }

    public static handleDontKnow(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            "I don't know either",
            'Wanna play?'
        ]);
        return next();
    }

    public static handleCanYouBuy(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage('Ruff! I mean... sure I can');
        return next();
    }

    public static handleForgot(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage('...');
        return next();
    }
}

export default Actions;
