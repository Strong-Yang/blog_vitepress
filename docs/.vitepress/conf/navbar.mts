// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '个人成长',
    items: [
      {
        text: '去旅游',
        link: '/column/Travel/' // 表示docs/column/Travel/index.md
      },
      {
        text: '玩游戏',
        link: '/column/Game/' // 表示docs/column/Game/index.md
      },
      {
        text: '做手工',
        link: '/column/Handmake/' // 表示docs/column/Handmake/index.md
      },
      {
        text: '学知识',
        link: '/column/Study/' // 表示docs/column/Study/index.md
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'bilibili', 
        link: 'https://space.bilibili.com/47800352' 
      },
      {
        text: 'Github',
        link: 'https://github.com/Strong-Yang'
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/optimux'
      }
    ]
  }
];
