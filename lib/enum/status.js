'use strict';

module.exports.get = function () {
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
};
