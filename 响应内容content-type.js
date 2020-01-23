let http = require('http');
let server = http.createServer();
server.on('request',(req,res)=>{
    // 告诉浏览器，传回的响应体是什么编码，数据类型是什么
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('收到请求，发送响应体')
});

server.listen(3000,()=>{
    console.log('server is running')
})