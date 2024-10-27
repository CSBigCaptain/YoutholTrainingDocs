import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "神秘的干货屋",
  description: "Training plan in Youthol",
  lastUpdated: true,
  base: "/YoutholTrainingDocs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "训练计划", link: "/training-plan/" },
      { text: "更多技巧", link: "/advanced-tech/" },
      { text: "编辑指南", link: "editor-guide" },
    ],

    sidebar: {
      "/training-plan/": [
        { text: "Welcome", link: "/training-plan/" },
        {
          text: "Level 1:",
          collapsed: false,
          items: [
            { text: "入门知识", link: "/training-plan/Basic" },
            { text: "HTML知识", link: "/training-plan/HTML" },
            { text: "CSS入门知识", link: "/training-plan/Basic-css" },
            { text: "CSS进阶", link: "/training-plan/Advanced-css" },
          ],
        },
        {
          text: "Level 2:",
          collapsed: false,
          items: [
            { text: "JavaScript", link: "/training-plan/JavaScript" },
            { text: "Vue.js", link: "/training-plan/Vue" },
            { text: "Node.js & Vite", link: "/training-plan/Node" },
          ],
        },
        {
          text: "Level 3:",
          collapsed: true,
          items: [
            { text: "占位符", link: "/training-plan/Server" },
            { text: "Python学习", link: "/training-plan/Python" },
            { text: "后端基础知识", link: "/training-plan/Backend" },
          ],
        },
      ],
      "/advanced-tech/": [
        { text: "本部分简介", link: "/advanced-tech/" },
        {
          text: "高级技巧",
          items: [
            { text: "HTML 速写", link: "/advanced-tech/Effective-edit-html" },
            { text: "Markdown 基本语法", link: "/advanced-tech/Markdown" },
            { text: "命令行基础", link: "/advanced-tech/Terminal" },
            { text: "Git 教学", link: "/advanced-tech/Git" },
          ],
        },
      ],
    },

    footer: {
      message: "Released under the MIT Licence.",
      copyright: "Copyright © 2024 Youthol. All rights reserved.",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/CSBigCaptain/YoutholTrainingDocs",
      },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      pattern:
        "https://github.com/CSBigCaptain/YoutholTrainingDocs/edit/main/docs/:path",
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
})
