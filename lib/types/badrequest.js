"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var exception_1 = require('../exception');
var CODE = 400;
var BadRequest = (function (_super) {
    __extends(BadRequest, _super);
    function BadRequest(message) {
        _super.call(this, CODE, message);
        this.name = 'BAD_REQUEST';
        this.status = CODE;
    }
    return BadRequest;
}(exception_1.Exception));
exports.BadRequest = BadRequest;
//# sourceMappingURL=badrequest.js.map