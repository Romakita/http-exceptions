import HTTPException = require('../http-exception');
const CODE = 402;

class PaymentRequired extends HTTPException{

    name:string = 'PAYMENT_REQUIRED';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}

export = PaymentRequired;