import HTTPException = require('../http-exception');
const CODE = 501;

class NotImplemented extends HTTPException{

    name:string = 'NOT_IMPLEMENTED';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = NotImplemented;