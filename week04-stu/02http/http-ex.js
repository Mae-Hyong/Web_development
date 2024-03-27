const http = require('http');
const PORT = 3000

const server = http.createServer((req, res) => {
    console.log(req); // 요청 메소드 확인
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // 응답 헤더
    res.write("<h1>Requst</h1>"); // 응답 본문
    res.end("End"); // 응답 종료
});

server.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 실행 중`)
});