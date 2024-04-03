const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (res, req) => {
    res.send("HOME");
});

app.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 실행 중`);
});