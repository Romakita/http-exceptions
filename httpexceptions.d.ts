/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts" />

declare module HTTPExceptions {

    var debugEnable: boolean;
    /**
     *
     */
    export class HTTPException implements Error{
        public name:string;
        public message:string;
        public stack:string;
        constructor(status:any, message?:string);
        static captureStackTrace(error: Error, constructorOpt: any);
    }
    /**
     *
     */
    export class BadGateway extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class BadRequest extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class Forbidden extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class GatewayTimeout extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class InternalServerError extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class MethodNotAllowed extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class NotAcceptable extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class NotFound extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class NotImplemented extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class PaymentRequired extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class ProxyError extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    export class ServiceUnvailable extends HTTPException {
        constructor(message:string);
    }
    /**
     *
     */
    export class Unauthorized extends HTTPException{
        constructor(message:string);
    }
    /**
     *
     */
    interface Request {
        accepts?: Function;
        paramsRequired(fields: Object): any;
    }
    /**
     *
     */
    interface Response {
        status(code: number): Response;
        send(msg: string): Response;
    }
    /**
     *
     */
    interface ParamsRequired {
        body?: Array<String>;
        params?: Array<String>;
        query?: Array<String>;
    }
    /**
     *
     * @param b
     */
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
    function paramsRequired(): (req: Request, res: Response, next: Function) => any;
    /**
     *
     * @returns {function(any, Request, Response): undefined}
     */
    function globalHandler(): (err: any, req: Request, res: Response) => void;
}
export = HTTPExceptions;
