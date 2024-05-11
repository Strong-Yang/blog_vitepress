import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog_vitepress/',
  title: "My Personal Blog",
  description: "A Personal Blog For My Own",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.jpg' ,// 表示docs/public/avartar.png
    nav: [
      { text: 'Game Record', link: '/' },
      { text: 'Travel Record', link: '/' },
      { text: 'Handmade Record', link: '/' },
      { text: 'Study', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
