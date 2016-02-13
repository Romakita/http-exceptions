"use strict";
var _exception_1 = require("./lib/_exception");
var badgateway_1 = require("./lib/types/badgateway");
var badrequest_1 = require("./lib/types/badrequest");
var forbidden_1 = require("./lib/types/forbidden");
var gatewaytimeout_1 = require("./lib/types/gatewaytimeout");
var internalservererror_1 = require("./lib/types/internalservererror");
var methodnotallowed_1 = require("./lib/types/methodnotallowed");
var notacceptable_1 = require("./lib/types/notacceptable");
var notfound_1 = require("./lib/types/notfound");
var notimplemented_1 = require("./lib/types/notimplemented");
var paymentrequired_1 = require("./lib/types/paymentrequired");
var proxyerror_1 = require("./lib/types/proxyerror");
var serviceunvailable_1 = require("./lib/types/serviceunvailable");
var unauthorized_1 = require("./lib/types/unauthorized");
exports.HTTPException = _exception_1.Exception;
exports.Exception = _exception_1.Exception;
exports.BadGateway = badgateway_1.BadGateway;
exports.BadRequest = badrequest_1.BadRequest;
exports.Forbidden = forbidden_1.Forbidden;
exports.GatewayTimeout = gatewaytimeout_1.GatewayTimeout;
exports.InternalServerError = internalservererror_1.InternalServerError;
exports.MethodNotAllowed = methodnotallowed_1.MethodNotAllowed;
exports.NotAcceptable = notacceptable_1.NotAcceptable;
exports.NotFound = notfound_1.NotFound;
exports.NotImplemented = notimplemented_1.NotImplemented;
exports.PaymentRequired = paymentrequired_1.PaymentRequired;
exports.ProxyError = proxyerror_1.ProxyError;
exports.ServiceUnvailable = serviceunvailable_1.ServiceUnvailable;
exports.Unauthorized = unauthorized_1.Unauthorized;
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
                throw new exports.NotAcceptable(list[0]);
            }
        }
        next();
    };
}
exports.mime = mime;
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
                throw new exports.BadRequest('Parameters required ' + a.join(', ') + '.');
            }
        };
        next();
    };
}
exports.paramsRequired = paramsRequired;
//# sourceMappingURL=index.js.map