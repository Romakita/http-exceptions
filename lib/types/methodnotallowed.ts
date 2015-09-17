import HTTPException = require('../http-exception');
const CODE = 405;

class MethodNotAllowed extends HTTPException{

    name:string = 'METHOD_NOT_ALLOWED';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = MethodNotAllowed;