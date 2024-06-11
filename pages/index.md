---
# 文档：https://vitepress.dev/zh/reference/site-config#config-resolution

layout: home
heroImage: /logo.png

title: 文档汇总
titleTemplate: 泽兰的个人文档

hero:
  name: 项目、文章等汇总
  text: 逆水行舟
  tagline: "不进则退"
  # 首页右边Logo设置
  image:
    src: /logo.svg
    alt: logo
  actions:
    - theme: brand
      text: 查看笔记
      link: /overview/
    - theme: alt
      text: 在 Gitlab社区版 上查看
      link: https://gitlab.com/gaojiahui

features:
  - icon: 💡
    title: 语雀文档
    details: 个人语雀文档汇总
  - icon: 📦
    title: 掘金收藏
    details: 掘金个人收藏的文章
  - icon: ☀️
    title: 🛠️ 代码存储
    details: gitlab社区版
  - icon: 💎
    title: 面试题
    details: 包括：常规的面试题等
  - icon: 🌟
    title: 开源面试题收集
    details: 包括：
---

<style>
  /*首页标题 覆盖变量 自定义字体渐变样式*/
  :root {
    --vp-home-hero-name-color: transparent;
    --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  }
</style>