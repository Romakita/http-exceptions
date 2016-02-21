"use strict";
var badrequest_1 = require("./lib/badrequest");
function paramsRequired() {
    return function (req, res, next) {
        req.paramsRequired = function (fields) {
            var a = [];
            for (var field in fields) {
                if (fields[field]) {
                    for (var i = 0; i < fields[field].length; i++) {
                        var key = fields[field][i];
                        if (this[field][key] === undefined) {
                            a.push(key);
                        }
                    }
                }
            }
            if (a.length) {
                throw new badrequest_1.BadRequest('Parameters required ' + a.join(', ') + '.');
            }
        };
        next();
    };
}
exports.paramsRequired = paramsRequired;
//# sourceMappingURL=paramsrequired.js.map