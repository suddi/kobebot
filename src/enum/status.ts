'use strict';

export interface status {
    code: number,
    message: string,
    retryable: boolean
}

export interface statusSet {
    readonly [index: number]: status
}

class Status {
    public static get(): statusSet {
        return {
            200: {
                code: 200,
                message: 'OK',
                retryable: true
            },

            500: {
                code: 500,
                message: 'Internal Error',
                retryable: false
            }
        };
    }
}

export default Status;
