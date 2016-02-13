"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _exception_1 = require('../_exception');
var CODE = 401;
var Unauthorized = (function (_super) {
    __extends(Unauthorized, _super);
    function Unauthorized(message) {
        _super.call(this, CODE, message);
        this.name = 'UNAUTHORIZED';
        this.status = CODE;
    }
    return Unauthorized;
}(_exception_1.Exception));
exports.Unauthorized = Unauthorized;
//# sourceMappingURL=unauthorized.js.map