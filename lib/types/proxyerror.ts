import HTTPException = require('../http-exception');
const CODE = 502;

class ProxyError extends HTTPException{

    name:string = 'PROXY_ERROR';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = ProxyError;