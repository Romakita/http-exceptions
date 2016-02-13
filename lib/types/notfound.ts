import {Exception} from '../_exception';
const CODE = 404;

export class NotFound extends Exception{

    name:string = 'NOT_FOUND';
    status:number = CODE;

    constructor(message: string){
        super(CODE, message);
    }
}