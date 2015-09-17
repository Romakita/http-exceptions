import HTTPException = require('../http-exception');
const CODE = 404;

class NotFound extends HTTPException{

    name:string = 'NOT_FOUND';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = NotFound;