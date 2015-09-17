
import HTTPException = require('../http-exception');
const CODE = 403;

class Forbidden extends HTTPException{

    name:string = 'FORBIDDEN';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = Forbidden;