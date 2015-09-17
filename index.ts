/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts" />

declare module Express {
    export interface Request {
        accepts?: Function;
    }
    export interface Response{
        status(code:number): Response;
        send(msg:string): Response;
    }
}

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

    /**
     *
     * @param list
     * @returns {function(Object, Object, Function): *}
     */
    export function mime(list:Array<String>|String):Function{

        if(typeof list == 'string'){
            list = [<String>list];
        }

        return function(req:Express.Request, res:Express.Response, next:Function){

            for(var i = 0; i < list.length; i++){
                if (!req.accepts(list[0])){
                    throw new NotAcceptable(list[0]);
                }
            }

            return next();
        }

    }

    /**
     *
     * @returns {function(any, Express.Request, Express.Response): undefined}
     */
    export function globalHandler(){

        return function(err:any, req:Express.Request, res:Express.Response){

            if (err instanceof HTTPException) {

                res.status(err.status)
                    .send(err.getMessage());

            }
        }

    }
}

export = HTTPException;


