import {Dictionary} from 'lodash';

class Training {
    public static get(): Dictionary<string[]> {
        return {
            hello: ['hi', 'hello', 'howdy', "what's up", 'bonjour', 'good morning', 'good afternoon', 'good evening', 'salut', 'salutations', 'woof', 'ruff'],
            how_are_you: ['how are you', 'how are you doing', 'how are you going', 'how are things', "how's things", 'how is it going', 'how about it']
        };
    }
}

export default Training;
