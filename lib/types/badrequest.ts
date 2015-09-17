
import HTTPException = require('../http-exception');
const CODE = 400;

class BadRequest extends HTTPException{

    name:string = 'BAD_REQUEST';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = BadRequest;