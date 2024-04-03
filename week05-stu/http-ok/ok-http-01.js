const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req); // 요청 메소드 확인
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // 응답 헤더
    res.end("OK"); // 응답 종료
});

server.listen(3000, () => {
    console.log(`3000번 포트에서 서버 실행중`);
});

// res.end("OK").listen(3000, () => {
//     console.log(`3000번 포트에서 서버 실행중`);
// });