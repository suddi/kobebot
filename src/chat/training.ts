'use strict';

import {Dictionary} from 'lodash';

class Training {
    public static get(): Dictionary<string[]> {
        return {
            how_are_you: ['how are you', 'how are you doing', 'how are you going', 'how are things', "how's things", 'how is it going', 'how about it'],
            help: ['how can you help', 'i need some help', 'how could you assist me'],
            hello: ['hi', 'hello', 'howdy', "what's up", 'bonjour', 'good morning', 'good afternoon', 'good evening', 'salut', 'salutations', 'woof', 'ruff'],
            terrible_day: ["i'm having a terrible day", 'what a day', 'horrible day', 'hate this'],
            food: ['what did you eat', 'are you hungry', 'hungry', 'food please', 'lunch', 'dinner', 'breakfast'],
            tired: ["i'm tired", 'lazy', 'so tired', 'exhausted'],
            protect: ['safety', 'guard', 'protect me'],
            bite_me: ['do you bite', 'chew me'],
            playing: ['are you playing', "let's play", 'some games'],
            sure: ['sure', 'certainly', 'for sure', "let's do it", 'just do it', 'no problem'],
            almost_there: ['almost there', 'close by', 'near by', 'so close', 'about to get it'],
            location: ['know this place', 'location'],
            nothing: ['nothing', 'zero'],
            dont_know: ["I don't know", "I don't remember", 'not sure', 'unsure about this', 'no idea'],
            can_you_buy: ['buy this', 'purchase it', 'can you get this for me', 'buy something'],
            forgot: ['you forgot', "didn't remember"]
        };
    }
}

export default Training;
