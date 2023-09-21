import {Express, Request, Response, Application} from 'express';
import express = require("express");

const app: Application = express();
const port = 8000;

app.get("/", (req:Request, res: Response) => {
    
    res.send("Hello world");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});