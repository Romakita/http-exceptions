"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _exception_1 = require('../_exception');
var CODE = 501;
var NotImplemented = (function (_super) {
    __extends(NotImplemented, _super);
    function NotImplemented(message) {
        _super.call(this, CODE, message);
        this.name = 'NOT_IMPLEMENTED';
        this.status = CODE;
    }
    return NotImplemented;
}(_exception_1.Exception));
exports.NotImplemented = NotImplemented;
//# sourceMappingURL=notimplemented.js.map