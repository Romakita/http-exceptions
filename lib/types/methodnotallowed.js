"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exception_1 = require('../exception');
var CODE = 405;
var MethodNotAllowed = (function (_super) {
    __extends(MethodNotAllowed, _super);
    function MethodNotAllowed(message) {
        _super.call(this, CODE, message);
        this.name = 'METHOD_NOT_ALLOWED';
        this.status = CODE;
    }
    return MethodNotAllowed;
}(exception_1.Exception));
exports.MethodNotAllowed = MethodNotAllowed;
//# sourceMappingURL=methodnotallowed.js.map