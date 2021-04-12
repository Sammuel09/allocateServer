"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVirtualMachines = void 0;
const helper_1 = require("./helper");
const validateVirtualMachines = (req, res, next) => {
    const { virtualMachines } = req.body;
    // check if virtualMachines is of an array type
    if (!Array.isArray(virtualMachines)) {
        helper_1.errorHelper(res, 400, 'Bad request. Request body has to be of the type Array');
    }
    // check if virtualMachines is not empty
    if (virtualMachines.length === 0) {
        helper_1.errorHelper(res, 400, 'Bad request. Request body cannot be empty');
    }
    // check to be sure that every item in the array is an object
    const isAnObject = (value) => typeof value === 'object' && value !== null;
    if (!virtualMachines.every(isAnObject)) {
        helper_1.errorHelper(res, 400, 'Bad request. Request body has to contain an array of objects');
    }
    // check to be sure that every item in the array is an object that contains
    // values of numeric type
    const containsCorrectObjectType = (value) => {
        return (Number.isFinite(value.cpu) &&
            Number.isFinite(value.ram) &&
            Number.isFinite(value.hdd));
    };
    if (!virtualMachines.every(containsCorrectObjectType)) {
        helper_1.errorHelper(res, 400, 'Bad request. Request body should contain an array of objects of the correct type');
    }
};
exports.validateVirtualMachines = validateVirtualMachines;
