// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
    // /column/xxx/表示对这个文件夹下的所有md文件做侧边栏配置
    '/column/Travel/': [
        {
            text: '去旅游',
            items: [
                {   text: '成都', 
                    link: '/column/Travel/chengdu' 
                },
                {   text: '广州', 
                    link: '/column/Travel/guangzhou' 
                }
            ]
        }
    ],
    '/column/Game/': [
        {
            text: '玩游戏',
            items: [
                {   text: '魔兽世界', 
                    link: '/column/Game/WOW' 
                },
                {   text: '英雄联盟', 
                    link: '/column/Game/LOL' 
                }
            ]
        }
    ],
    '/column/Handmake/': [
        {
            text: '做手工',
            items: [
                {   text: '高达', 
                    link: '/column/Handmake/Gundam',
                    items: [
                        {   text: '自由', 
                            link: '/column/Handmake/Gundam/freedom' 
                        }
                    ]
                }
            ]
        }
    ],
    '/column/Study/': [
        {
            text: '学知识',
            items: [
                {   text: 'Test', 
                    link: '/column/Study/test' 
                }
            ]
        }
    ]
};
