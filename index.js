const express = require("express");

const app = express();


// 添加几个中间件

//! cors 跨域资源共享 就是在res.header上 添加一个 Access-control-allow-origin :"*"" 头
app.use(require("cors")());
// ! 有了这个，就可以直接使用请求体中的JSON数据。
app.use(express.json());

// 添加mongodb 
require('./db/index.js')();
// 添加子路由 /api/docs 增加文章
require('./routes/docs/article.js')(app);
// 添加子路由 /api/docs/tags 增加文章的分类
require('./routes/docs/tag.js')(app);

// 第一步接口测试, 通过则说明 服务器可以正常运行。 也配合index.html用于跨域测试
// app.get("/", (req, res) => {
//   const ip = req.headers.origin;

//   res.json({
//     message: "你好世界",
//     ip
//   });
// });

app.listen(3000, () => {
  console.log("http://localhost:3000", "服务器正在此处运行");
});
