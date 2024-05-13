import { defineConfig } from 'vitepress';
import { nav } from './conf/index.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog_vitepress/',
  title: "个人博客记录",
  description: "A Personal Blog For My Own",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.jpg' ,// 表示docs/public/avartar.png
    nav: nav,

    sidebar: [
      {
        text: '去旅游',
        items: [
          { text: '成都', link: '/column/Travel/chengdu' },
          { text: '广州', link: '/column/Travel/guangzhou' }
        ]
      },
      {
        text: '玩游戏',
        items: [
          { text: '魔兽世界', link: '/column/Game/WOW' },
          { text: '英雄联盟', link: '/column/Game/LOL' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
