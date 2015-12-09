var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HTTPException = require('../http-exception');
var CODE = 404;
var NotFound = (function (_super) {
    __extends(NotFound, _super);
    function NotFound(message) {
        _super.call(this, CODE, message);
        this.name = 'NOT_FOUND';
        this.status = CODE;
    }
    return NotFound;
})(HTTPException);
module.exports = NotFound;
//# sourceMappingURL=notfound.js.map