/// <reference path="type.d.ts" />

interface ParamsRequired{
    body?:Array<String>;
    params?:Array<String>;
    query?:Array<String>;
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
    export var NotFound = require('./lib/types/notfound');
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

            next();
        }

    }

    /**
     *
     * @returns {function(Express.Request, Express.Response, Function): *}
     */
    export function paramsRequired(){

        return function(req:Express.Request, res:Express.Response, next:Function){

            req.paramsRequired = function(fields:ParamsRequired){

                var a = [];

                for(var field in fields){
                    if(fields[field]){
                        for(var i = 0; i < fields[field].length; i++){

                            var key = fields[field][i];

                            if(this[field][key] === undefined){
                                a.push(key);
                            }
                        }
                    }
                }

                if(a.length){
                    throw new BadRequest('Parameters required ' + a.join(', ') +'.');
                }
            };

            next();
        };
    }

}

export = HTTPException;


