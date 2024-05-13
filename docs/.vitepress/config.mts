import { defineConfig } from 'vitepress';
import { nav } from './conf/index.mts';
import { sidebar } from './conf/index.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig(
  {
    base: '/blog_vitepress/',
    title: "个人博客记录",
    description: "A Personal Blog For My Own",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: '/avatar.jpg' ,// 表示docs/public/avartar.png
      nav: nav,
      sidebar: sidebar,
      outline: {
        level: [2, 6],
        label: '目录'
      },
      search: {
        provider: 'local'
      },
      lastUpdated: true,
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present Optimux'
      },
      docFooter: {
        prev: 'Pagina prior',
        next: 'Proxima pagina'
      },
      editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      }
    }
  }
)

