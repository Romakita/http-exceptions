/// <reference path="typings/node/node.d.ts" />
var HTTPException;
(function (HTTPException_1) {
    HTTPException_1.HTTPException = require('./lib/http-exception');
    HTTPException_1.BadGateway = require('./lib/types/badgateway');
    HTTPException_1.BadRequest = require('./lib/types/badrequest');
    HTTPException_1.Forbidden = require('./lib/types/forbidden');
    HTTPException_1.GatewayTimeout = require('./lib/types/badrequest');
    HTTPException_1.InternalServerError = require('./lib/types/internalservererror');
    HTTPException_1.MethodNotAllowed = require('./lib/types/methodnotallowed');
    HTTPException_1.NotAcceptable = require('./lib/types/notacceptable');
    HTTPException_1.NotFound = require('./lib/types/notFound');
    HTTPException_1.NotImplemented = require('./lib/types/notimplemented');
    HTTPException_1.PaymentRequired = require('./lib/types/paymentrequired');
    HTTPException_1.ProxyError = require('./lib/types/proxyerror');
    HTTPException_1.ServiceUnvailable = require('./lib/types/serviceunvailable');
    HTTPException_1.Unauthorized = require('./lib/types/unauthorized');
})(HTTPException || (HTTPException = {}));
module.exports = HTTPException;
//# sourceMappingURL=index.js.map