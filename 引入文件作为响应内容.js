// 利用fs文件系统引入文件资源
// charset仅是字符编码，图片不需要编码

let http = require('http');
let fs = require('fs');

let server = http.createServer();

server.on('request', (req, res) => {
    if (req.url === '/') {

        fs.readFile('./resource/index.html', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败')
            }else{
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })
    }else if (req.url === '/pic') {
        fs.readFile('./resource/gent.jpg',(err,data)=>{
            if (err) {
                res.setHeader('Content-Type','text/plain');
                res.end('文件读取失败')
            }else{
                res.setHeader('Content-Type','image/jpg');
                res.end(data)
            }
        })
    }
});

server.listen(3000, () => {
    console.log('server is running')
})