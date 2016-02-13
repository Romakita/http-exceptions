"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _exception_1 = require('../_exception');
var CODE = 403;
var Forbidden = (function (_super) {
    __extends(Forbidden, _super);
    function Forbidden(message) {
        _super.call(this, CODE, message);
        this.name = 'FORBIDDEN';
        this.status = CODE;
    }
    return Forbidden;
}(_exception_1.Exception));
exports.Forbidden = Forbidden;
//# sourceMappingURL=forbidden.js.map