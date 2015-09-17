import HTTPException = require('../http-exception');
const CODE = 406;

class NotAcceptable extends HTTPException{

    name:string = 'NOT_ACCEPTABLE';
    status:number = CODE;

    constructor(message: string){
        super(CODE, "You must accept content-type " + message);
    }
}

export = NotAcceptable;