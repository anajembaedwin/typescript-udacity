import express from "express";
const MYNUM: number = 7;
const MYSTRING: string = "Welcome to connect section";

console.log(`My number is ${MYNUM} and my greeting is ${MYSTRING}`);

const app = express();
const port = 3000;


app.listen(port, ()=> {console.log(`listen on port ${port}`)});