import {Request, Response} from 'restify';

import Status from '../enum/status';

class Controller {
    static whoami(_req: Request, res: Response): void {
        const statuses = Status.get();
        return res.json(200, {
            meta: statuses[200],
            data: {}
        });
    }
}

export default Controller;
