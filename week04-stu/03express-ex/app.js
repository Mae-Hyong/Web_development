const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200);    
    res.send("반갑습니다 ! :)");
})

app.listen(PORT, (req, res) => {
    console.log(`${PORT}번에서 실행 중 입니다.`)
})