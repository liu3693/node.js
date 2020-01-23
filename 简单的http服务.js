// 使用node 构建一个web服务器
// node中提供了一个核心模块：http。帮助创建服务器

// 1.require加载http核心模块
let http = require('http');

// 2.使用http.createServer()，返回一个Server实例
let server = http.createServer();

// 3.注册request请求事件，执行第二个参数
server.on('request',function (req,res) {
    // request 请求事件处理函数，需要接收两个参数：
    //  request 请求对象——获取客户端的一些请求信息
    //  response 响应对象——给客户端发送响应消息
    console.log('收到请求，请求路径是：'+req.url);
    // response对象的write方法可以用来给客户端发送响应数据
    // write可以多次使用，一定要用end结束，否则客户端一直等待
    // response.write('hello world');
    // response.end();
    // 推荐以下方式
    // 相应数据只能是二进制数据或字符串
    res.end('hello world');
    // req.url 是端口号后的一部分路径，url一定是以 / 开头
    let url = req.url
});

// 4.绑定端口号，启动服务器
server.listen(3000,function () {
    console.log('服务器启动成功，可以通过http://127.0.0.1:3000/ 来访问')
})