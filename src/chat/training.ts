import {Dictionary} from 'lodash';

class Training {
    static get(): Dictionary<Array<string>> {
        return {
            hello: [
                'hi',
                'hello',
                'howdy',
                'what\'s up',
                'bonjour',
                'good morning',
                'good afternoon',
                'good evening',
                'salut',
                'salutations',
                'woof',
                'ruff'
            ]
        };
    }
}

export default Training;
