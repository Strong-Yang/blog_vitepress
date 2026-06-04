// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
    // /column/xxx/表示对这个文件夹下的所有md文件做侧边栏配置
    '/column/Travel/': [
        {
            text: '去旅游',
            link: '/column/Travel/',
            items: [
                {   text: '成都', 
                    link: '/column/Travel/chengdu' 
                },
                {   text: '广州', 
                    link: '/column/Travel/guangzhou' 
                },
                {   text: '重庆', 
                    link: '/column/Travel/chongqing' 
                },
                {   text: '阳朔', 
                    link: '/column/Travel/yangshuo' 
                },
                {   text: '杭州', 
                    link: '/column/Travel/hangzhou' 
                },
                {   text: '上海迪士尼', 
                    link: '/column/Travel/shanghai_disney' 
                }
            ]
        }
    ],
    '/column/Game/': [
        {
            text: '玩游戏',
            link: '/column/Game/',
            items: [
                {   text: '魔兽世界', 
                    link: '/column/Game/WOW' 
                },
                {   text: '英雄联盟', 
                    link: '/column/Game/LOL' 
                },
                {   text: '剑网三', 
                    link: '/column/Game/JX3' 
                }
            ]
        }
    ],
    '/column/Handmake/': [
        {
            text: '做手工',
            link: '/column/Handmake/',
            items: [
                {   text: '高达', 
                    link: '/column/Handmake/Gundam',
                    items: [
                        {   text: '自由', 
                            link: '/column/Handmake/Gundam/freedom' 
                        },
                        {   text: '沙扎比', 
                            link: '/column/Handmake/Gundam/SAZABI' 
                        }
                    ]
                }
            ]
        }
    ],
    '/column/Study/': [
        {
            text: '学知识',
            link: '/column/Study/',
            items: [
                {   text: '学习笔记', 
                    link: '/column/Study/test' 
                }
            ]
        }
    ],
    '/column/Fitness/': [
        {
            text: '健身',
            link: '/column/Fitness/',
            items: [
                {   text: '力量训练', 
                    link: '/column/Fitness/strength' 
                },
                {   text: '饮食管理', 
                    link: '/column/Fitness/diet' 
                }
            ]
        }
    ],
    '/column/Growing/': [
        {
            text: '个人成长',
            link: '/column/Growing/',
            items: [
                {   text: '健身', 
                    link: '/column/Fitness/' 
                }
            ]
        }
    ]
};
