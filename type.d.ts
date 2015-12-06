/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts" />

declare module Express {
    export interface Request {
        accepts?: Function;
        paramsRequired(fields:Object);
    }
    export interface Response{
        status(code:number): Response;
        send(msg:string): Response;
    }
}