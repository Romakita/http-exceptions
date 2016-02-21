import {Exception as _Exception} from "./lib/exception";
import {BadGateway as _BadGateway} from "./lib/badgateway";
import {BadRequest as _BadRequest} from "./lib/badrequest";
import {Forbidden as _Forbidden} from "./lib/forbidden";
import {GatewayTimeout as _GatewayTimeout} from "./lib/gatewaytimeout";
import {InternalServerError as _InternalServerError} from "./lib/internalservererror";
import {MethodNotAllowed as _MethodNotAllowed} from "./lib/methodnotallowed";
import {NotAcceptable as _NotAcceptable} from "./lib/notacceptable";
import {NotFound as _NotFound} from "./lib/notfound";
import {NotImplemented as _NotImplemented} from "./lib/notimplemented";
import {PaymentRequired as _PaymentRequired} from "./lib/paymentrequired";
import {ProxyError as _ProxyError} from "./lib/proxyerror";
import {ServiceUnvailable as _ServiceUnvailable} from "./lib/serviceunvailable";
import {Unauthorized as _Unauthorized} from "./lib/unauthorized";
import {paramsRequired as _paramsRequired} from "./paramsrequired";
import {mime as _mime} from "./mime";


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

export function paramsRequired(){
    return _paramsRequired();
}

export function mime(list:Array<string>|string){
    return _mime(list);
}
