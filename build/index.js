"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
var welcomeMessage = { "Message": "Welcome to connect section" };
app.get('/', function (req, res) {
    res.json(welcomeMessage);
});
app.listen(port, function () { console.log("listen on port ".concat(port)); });
