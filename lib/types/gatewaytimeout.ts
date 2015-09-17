
import HTTPException = require('../http-exception');
const CODE = 504;

class GatewayTimeout extends HTTPException{

    name:string = 'GATEWAY_TIMEOUT';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = GatewayTimeout;