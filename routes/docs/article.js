module.exports = app => {
  const Article = require("../../model/Article");
  const express = require("express");
  const router = express.Router();

  // get 抓取文章
  router.get("/docs", async (req, res) => {
    const articles = await Article.find().limit(10);
    res.send(articles);
  });

  //post 添加文章
  router.post("/docs", async (req, res) => {
    const article = await Article.create(req.body);
    res.send(article);
  });

  // *查询文章"分类" 用 id来查询。

  router.get("/docs/:article_id", async (req, res) => {
    const article = await Article.findById(req.params.article_id).populate('tag')
    res.send(article);
  });

  // *查询文章"分类组" 用 id来查询。
  router.get("/docs/:article_id", async (req, res) => {
    const article = await Article.findById(req.params.article_id).populate('tags')
    res.send(article);
  });

  app.use("/api", router);
};
