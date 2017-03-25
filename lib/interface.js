'use strict';

const Headers = require('./enum/headers');
const Status = require('./enum/status');

/**
 * Generate the response for a request, based on status_code and response_body
 * @param  {number} statusCode - status code for the response
 * @param  {Object} responseBody -  prepared response body
 * @return {Object} the response with status_code and body
 *
 * @example
 * generateResponse(200, {a: 42})
 * // => {statusCode: 200, body: {meta: {code: 200, message: 'OK', retryable:true}, data: {a: 42}}}
 * generateResponse(500, {a: 42})
 * // => {statusCode: 500, body: {meta: {code: 500, message: 'InternalError', retryable: false}, data: {}}}
 * generateResponse(9999, {a: 42})
 * // => {statusCode: 500, body: {meta: {code: 500, message: 'InternalError', retryable: false}, data: {}}}
 */
function generateResponse(statusCode, responseBody) {
    const statuses = Status.get();
    const meta = statuses[statusCode] ? statuses[statusCode] : statuses[500];
    const data = meta.code === 500 ? {} : responseBody;
    return {
        statusCode: meta.code,
        body: {
            meta: meta,
            data: data
        }
    };
}

function respond(app, statusCode, responseBody) {
    const response = generateResponse(statusCode, responseBody || {});
    return new app.ApiResponse(
        response.body,
        Headers.get().RESPONSE,
        response.statusCode
    );
}

module.exports = {
    respond: respond
};
