
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