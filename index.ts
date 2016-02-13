import {Exception as _Exception} from "./lib/exception";
import {BadGateway as _BadGateway} from "./lib/types/badgateway";
import {BadRequest as _BadRequest} from "./lib/types/badrequest";
import {Forbidden as _Forbidden} from "./lib/types/forbidden";
import {GatewayTimeout as _GatewayTimeout} from "./lib/types/gatewaytimeout";
import {InternalServerError as _InternalServerError} from "./lib/types/internalservererror";
import {MethodNotAllowed as _MethodNotAllowed} from "./lib/types/methodnotallowed";
import {NotAcceptable as _NotAcceptable} from "./lib/types/notacceptable";
import {NotFound as _NotFound} from "./lib/types/notfound";
import {NotImplemented as _NotImplemented} from "./lib/types/notimplemented";
import {PaymentRequired as _PaymentRequired} from "./lib/types/paymentrequired";
import {ProxyError as _ProxyError} from "./lib/types/proxyerror";
import {ServiceUnvailable as _ServiceUnvailable} from "./lib/types/serviceunvailable";
import {Unauthorized as _Unauthorized} from "./lib/types/unauthorized";

export interface ParamsRequired{
    body?:Array<String>;
    params?:Array<String>;
    query?:Array<String>;
}

export const HTTPException =        _Exception;
export const Exception =            _Exception;
export const BadGateway =           _BadGateway;
export const BadRequest =           _BadRequest;
export const Forbidden =            _Forbidden;
export const GatewayTimeout =       _GatewayTimeout;
export const InternalServerError =  _InternalServerError;
export const MethodNotAllowed =     _MethodNotAllowed;
export const NotAcceptable =        _NotAcceptable;
export const NotFound =             _NotFound;
export const NotImplemented =       _NotImplemented;
export const PaymentRequired =      _PaymentRequired;
export const ProxyError =           _ProxyError;
export const ServiceUnvailable =    _ServiceUnvailable;
export const Unauthorized =         _Unauthorized;

/**
 *
 * @param list
 * @returns {function(Object, Object, Function): *}
 */
export function mime(list:Array<string>|string):Function{

    if(typeof list == 'string'){
        list = [<string>list];
    }

    return function(req:any, res:any, next:Function){

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

    return function(req:any, res:any, next:Function){

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


