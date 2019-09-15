module.exports = app => {
    // 创建 文章 归属的 种类。
    const Tag = require("../../model/Tags.js");
    const express = require("express");
    const router = express.Router();
  
  // get 抓取分类
    router.get("/docs/tags/get", async (req, res) => {
      const tags = await Tag.find().limit(10)
      res.send(tags);
    });
  
    //post 增加分类
    router.post("/docs/tags/add", async (req, res) => {
      const tag = await Tag.create(req.body);
      res.send(tag);
    });

  // 按照某个(请给出_id)分类 来 查找对应的文章
  router.get('/docs/tags/relative/:id',async(req,res)=>{
    // const tags = await Tag.find().populate('article').limit(10);
     const tags = await Tag.findById(req.params.id).populate('article').limit(10);
    res.send(tags.article);

  })
    app.use("/api", router);
  };
  