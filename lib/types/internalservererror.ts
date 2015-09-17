
import HTTPException = require('../http-exception');

const CODE = 500;

class InternalServerError extends HTTPException{

    name:string = 'INTERNAL_SERVER_ERROR';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = InternalServerError;