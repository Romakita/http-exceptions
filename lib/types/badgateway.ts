
import HTTPException = require('../http-exception');
const CODE = 502;

class BadGateway extends HTTPException{

    name:string = 'BAD_GATEWAY';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = BadGateway;