/// <reference path="type.d.ts" />
var HTTPException;
(function (HTTPException_1) {
    var debugEnable = true;
    HTTPException_1.HTTPException = require('./lib/http-exception');
    HTTPException_1.BadGateway = require('./lib/types/badgateway');
    HTTPException_1.BadRequest = require('./lib/types/badrequest');
    HTTPException_1.Forbidden = require('./lib/types/forbidden');
    HTTPException_1.GatewayTimeout = require('./lib/types/badrequest');
    HTTPException_1.InternalServerError = require('./lib/types/internalservererror');
    HTTPException_1.MethodNotAllowed = require('./lib/types/methodnotallowed');
    HTTPException_1.NotAcceptable = require('./lib/types/notacceptable');
    HTTPException_1.NotFound = require('./lib/types/notfound');
    HTTPException_1.NotImplemented = require('./lib/types/notimplemented');
    HTTPException_1.PaymentRequired = require('./lib/types/paymentrequired');
    HTTPException_1.ProxyError = require('./lib/types/proxyerror');
    HTTPException_1.ServiceUnvailable = require('./lib/types/serviceunvailable');
    HTTPException_1.Unauthorized = require('./lib/types/unauthorized');
    function debug(b) {
        debugEnable = b;
    }
    HTTPException_1.debug = debug;
    /**
     *
     * @param list
     * @returns {function(Object, Object, Function): *}
     */
    function mime(list) {
        if (typeof list == 'string') {
            list = [list];
        }
        return function (req, res, next) {
            for (var i = 0; i < list.length; i++) {
                if (!req.accepts(list[0])) {
                    throw new HTTPException_1.NotAcceptable(list[0]);
                }
            }
            next();
        };
    }
    HTTPException_1.mime = mime;
    /**
     *
     * @returns {function(Express.Request, Express.Response, Function): *}
     */
    function paramsRequired() {
        return function (req, res, next) {
            req.paramsRequired = function (fields) {
                var a = [];
                for (var field in fields) {
                    if (fields[field]) {
                        for (var i = 0; i < fields[field].length; i++) {
                            var key = fields[field][i];
                            if (this[field][key] === undefined) {
                                a.push(key);
                            }
                        }
                    }
                }
                if (a.length) {
                    throw new HTTPException_1.BadRequest(a);
                }
            };
            next();
        };
    }
    HTTPException_1.paramsRequired = paramsRequired;
    /**
     *
     * @returns {function(any, Express.Request, Express.Response): undefined}
     */
    function globalHandler() {
        return function (err, req, res) {
            if (err instanceof HTTPException_1.HTTPException) {
                try {
                    res.status(err.status)
                        .send(err.getMessage());
                }
                catch (er) {
                    console.log('unable to run getMessage() method');
                    res.status(err.status)
                        .send(err.message);
                }
                if (debugEnable) {
                    throw err;
                }
            }
        };
    }
    HTTPException_1.globalHandler = globalHandler;
})(HTTPException || (HTTPException = {}));
module.exports = HTTPException;
//# sourceMappingURL=index.js.map