"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _exception_1 = require('../_exception');
var CODE = 500;
var InternalServerError = (function (_super) {
    __extends(InternalServerError, _super);
    function InternalServerError(message) {
        _super.call(this, CODE, message);
        this.name = 'INTERNAL_SERVER_ERROR';
        this.status = CODE;
    }
    return InternalServerError;
}(_exception_1.Exception));
exports.InternalServerError = InternalServerError;
//# sourceMappingURL=internalservererror.js.map