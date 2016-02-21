import {NotAcceptable} from "./lib/notacceptable";

export function mime(list:Array<string>|string):Function{

    if(typeof list == 'string'){
        list = [<string>list];
    }

    return function(req:any, res:any, next:Function){

        for(var i = 0; i < list.length; i++){
            if (!req.accepts(list[0])){
                throw new NotAcceptable(list[0]);
            }
        }

        next();
    }

}