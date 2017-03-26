interface status {
    code: number,
    message: string,
    retryable: boolean
}

interface statusSet {
    readonly [index: number]: status
}

class Status {
    static get(): statusSet {
        return {
            200: {
                code: 200,
                message: 'OK',
                retryable: true
            },

            500: {
                code: 500,
                message: 'InternalError',
                retryable: false
            }
        };
    }
}

export default Status;
