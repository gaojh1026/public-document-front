import { defineConfig } from "vitepress";
// 搜索栏
import search from "./config/search";
// 顶部导航
import nav from "./config/nav";
// 右上角社交连接
import socialLinks from "./config/socialLinks";
// 侧边栏
import routerConfig from '../router.config.json'

export default defineConfig({
  base: "/vitepress_docs/", // url默认前缀
  lang: "zh-CN", // 中文，英文设置en-US
  title: "文档整合", // 浏览器标签标题
  description: "一个集合我的个人收藏",
  srcDir :'./pages',
  appearance: true, // 暗黑模式
  ignoreDeadLinks: true, // 不会因死链接而使构建失败
  lastUpdated: true, // 使用 git 提交获取时间戳，使默认主题能够显示页面的上次更新时间
  // markdown主题
  markdown: {
    // 主题选择：https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
    // 主题预览：https://vscodethemes.com/
    theme: "one-dark-pro",
    lineNumbers: true, // 显示代码行数
    // markdown-it-attrs 插件忽略
    attrs: {
      leftDelimiter: "[[",
      rightDelimiter: "]]",
    },
  },
  outDir: "./dist", // 打包输出的目录
  titleTemplate: "前端笔记", // 标题后缀
  cleanUrls: true, // url是否带.html后缀
  head: createHead(),
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "文档", // 网站左上角标题
    outlineTitle: "⚡️文档内容大纲", // 大纲标题
    outline: "deep", // 大纲显示层级：number：只显示 | [number, number]：指定层级范围显示 | 'deep'：全部显示 | false：不显示
    // 使用浏览器内置索引进行模糊全文搜索
    search,
    // 右上角导航
    nav,
    // 右上角导航中显示带有图标的社交帐户链接
    socialLinks,
    // 左边侧栏导航
    sidebar:{
      "/":routerConfig,
    },
    // 编辑
    editLink: {
      pattern:
        "https://gitlab.com/gaojh-public/vitepress_docs/-/blob/main/pages/:path",
      text: "在 Gitlab 上编辑此页",
    },
    // 自定义上次更新的文本和日期格式
    lastUpdated: {
      text: "上次更新：",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    // // 右边文档大纲下面的-卡片广告
    // carbonAds: {
    //   code: "卡片广告 code",
    //   placement: "卡片广告布置",
    // },
    // 首页页脚配置。您可以添加消息和版权。仅当页面由于设计原因不包含边栏时，才会显示页脚。
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-2024  ZeLan",
    },
  },
});


/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    // ['meta', { name: 'author', content: 'Vbenjs Team' }],
    // [
    //   'meta',
    //   {
    //     name: 'keywords',
    //     content: 'vben, vitejs, vite, ant-design-vue, vue',
    //   },
    // ],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' }],
    // [
    //   'meta',
    //   {
    //     name: 'viewport',
    //     content:
    //       'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
    //   },
    // ],
    // ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ];
}