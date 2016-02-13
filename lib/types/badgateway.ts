
import {Exception} from '../_exception';
const CODE = 502;

export class BadGateway extends Exception{

    name:string = 'BAD_GATEWAY';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}