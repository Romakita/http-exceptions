import HTTPException = require('../http-exception');
const CODE = 503;

class ServiceUnvailable extends HTTPException{

    name:string = 'SERVICE_UNVAILABLE';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = ServiceUnvailable;