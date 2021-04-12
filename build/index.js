"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calculateServer_1 = require("./calculateServer");
const middleware_1 = require("./middleware");
const app = express_1.default();
const PORT = 8000;
app.use(express_1.default.json());
app.get('/', (req, res) => res.send('This application calculates the number of servers needed to host a non-empty collection of Virtual Machines'));
// add a middle ware to check the type of the server/vm
app.post('/server', middleware_1.validateVirtualMachines, calculateServer_1.calculateServer);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
