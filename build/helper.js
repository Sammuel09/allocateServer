"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHelper = void 0;
const errorHelper = (res, status, message) => {
    return res.status(status).json({
        status,
        message,
    });
};
exports.errorHelper = errorHelper;
