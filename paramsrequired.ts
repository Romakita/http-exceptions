import {BadRequest} from "./lib/badrequest";

export interface ParamsRequired{
    body?:Array<String>;
    params?:Array<String>;
    query?:Array<String>;
}

export function paramsRequired(){

    return function(req:any, res:any, next:Function){

        req.paramsRequired = function(fields:ParamsRequired){

            var a = [];

            for(var field in fields){
                if(fields[field]){
                    for(var i = 0; i < fields[field].length; i++){

                        var key = fields[field][i];

                        if(this[field][key] === undefined){
                            a.push(key);
                        }
                    }
                }
            }

            if(a.length){
                throw new BadRequest('Parameters required ' + a.join(', ') +'.');
            }
        };

        next();
    };
}