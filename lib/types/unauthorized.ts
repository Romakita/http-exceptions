import HTTPException = require('../http-exception');
const CODE = 401;

class Unauthorized extends HTTPException{

    name:string = 'UNAUTHORIZED';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = Unauthorized;