"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MYNUM = 7;
var MYSTRING = "Welcome to connect section";
console.log("My number is ".concat(MYNUM, " and my greeting is ").concat(MYSTRING));
var app = (0, express_1.default)();
var port = 3000;
app.listen(port, function () { console.log("listen on port ".concat(port)); });
