var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HTTPException = require('../http-exception');
var CODE = 401;
var Unauthorized = (function (_super) {
    __extends(Unauthorized, _super);
    function Unauthorized(message) {
        _super.call(this, CODE, message);
        this.name = 'UNAUTHORIZED';
        this.status = CODE;
    }
    return Unauthorized;
})(HTTPException);
module.exports = Unauthorized;
//# sourceMappingURL=unauthorized.js.map