/// <reference path="type.d.ts" />
declare module HTTPException {
    var HTTPException: any;
    var BadGateway: any;
    var BadRequest: any;
    var Forbidden: any;
    var GatewayTimeout: any;
    var InternalServerError: any;
    var MethodNotAllowed: any;
    var NotAcceptable: any;
    var NotFound: any;
    var NotImplemented: any;
    var PaymentRequired: any;
    var ProxyError: any;
    var ServiceUnvailable: any;
    var Unauthorized: any;
    function debug(b: boolean): void;
    /**
     *
     * @param list
     * @returns {function(Object, Object, Function): *}
     */
    function mime(list: Array<String> | String): Function;
    /**
     *
     * @returns {function(Express.Request, Express.Response, Function): *}
     */
    function paramsRequired(): (req: Express.Request, res: Express.Response, next: Function) => any;
    /**
     *
     * @returns {function(any, Express.Request, Express.Response): undefined}
     */
    function globalHandler(): (err: any, req: Express.Request, res: Express.Response) => void;
}
export = HTTPException;
