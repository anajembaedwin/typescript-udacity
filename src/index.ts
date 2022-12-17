import express from "express";

const app = express();
const port = 3000;

const welcomeMessage: any = {"Message": "Welcome to connect section"};

app.use(express.json());

app.get('/', (req, res) =>  {
    res.json(welcomeMessage);
})


app.listen(port, ()=> {console.log(`listen on port ${port}`)});
