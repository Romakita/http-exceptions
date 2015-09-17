var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HTTPException = require('../http-exception');
var CODE = 501;
var NotImplemented = (function (_super) {
    __extends(NotImplemented, _super);
    function NotImplemented(message) {
        _super.call(this, CODE, message);
        this.name = 'NOT_IMPLEMENTED';
        this.status = CODE;
    }
    return NotImplemented;
})(HTTPException);
module.exports = NotImplemented;
//# sourceMappingURL=notimplemented.js.map