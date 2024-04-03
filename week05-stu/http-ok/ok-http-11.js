const http = require('http');
const url = require('url');

http.createServer( (req, res) => {
    const path = url.parse(req.url, true).pathname; 
    res.setHeader("Content-Type", "text/html");
    if ( path === "/user") {
        user(req, res); // user() 함수 실행
    } else if ( path === "/picture") {
        picture(req, res); // picture() 함수 실행
    } else {
        notFound(req, res); // notFound() 함수 실행
    }
}).listen(3000, () => {
    console.log(`3000번 포트에서 서버 실행중`)
});

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query; // querystring 중요 !
    res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`);
};

const picture = (req, res) => {
    res.end(`<ul>
    <li>picture 1</li>
    <li>picture 2</li>
    <li>picture 3</li> 
    </ul>
    `);
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
};