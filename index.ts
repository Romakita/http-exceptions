/// <reference path="typings/node/node.d.ts" />

module HTTPException{

    export var HTTPException = require('./lib/http-exception');
    export var BadGateway = require('./lib/types/badgateway');
    export var BadRequest = require('./lib/types/badrequest');
    export var Forbidden = require('./lib/types/forbidden');
    export var GatewayTimeout = require('./lib/types/badrequest');
    export var InternalServerError = require('./lib/types/internalservererror');
    export var MethodNotAllowed = require('./lib/types/methodnotallowed');
    export var NotAcceptable = require('./lib/types/notacceptable');
    export var NotFound = require('./lib/types/notFound');
    export var NotImplemented = require('./lib/types/notimplemented');
    export var PaymentRequired = require('./lib/types/paymentrequired');
    export var ProxyError = require('./lib/types/proxyerror');
    export var ServiceUnvailable = require('./lib/types/serviceunvailable');
    export var Unauthorized = require('./lib/types/unauthorized');

}

export = HTTPException;


