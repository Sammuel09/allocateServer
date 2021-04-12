"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateServer = void 0;
const allocateServer_1 = require("./allocateServer");
const calculateServer = (req, res) => {
    // console.log(req.body);
    const { virtualMachines } = req.body;
    const numberOfVirtualMachines = allocateServer_1.allocateServer(allocateServer_1.server, virtualMachines);
    // console.log(numberOfVirtualMachines);
    return res.send(`the number of servers needed are: ${numberOfVirtualMachines}`);
};
exports.calculateServer = calculateServer;
