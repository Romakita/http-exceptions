import {Exception} from '../_exception';
const CODE = 401;

export class Unauthorized extends Exception{

    name:string = 'UNAUTHORIZED';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}