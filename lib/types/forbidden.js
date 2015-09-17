var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HTTPException = require('../http-exception');
var CODE = 403;
var Forbidden = (function (_super) {
    __extends(Forbidden, _super);
    function Forbidden(message) {
        _super.call(this, CODE, message);
        this.name = 'FORBIDDEN';
        this.status = CODE;
    }
    return Forbidden;
})(HTTPException);
module.exports = Forbidden;
//# sourceMappingURL=forbidden.js.map