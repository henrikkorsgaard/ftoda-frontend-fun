"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
    res.send("Hello world");
});
app.listen(port, () => {
    console.log(`Sever running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map