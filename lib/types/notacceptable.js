"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _exception_1 = require('../_exception');
var CODE = 406;
var NotAcceptable = (function (_super) {
    __extends(NotAcceptable, _super);
    function NotAcceptable(message) {
        _super.call(this, CODE, "You must accept content-type " + message);
        this.name = 'NOT_ACCEPTABLE';
        this.status = CODE;
    }
    return NotAcceptable;
}(_exception_1.Exception));
exports.NotAcceptable = NotAcceptable;
//# sourceMappingURL=notacceptable.js.map