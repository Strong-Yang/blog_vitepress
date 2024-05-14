---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
# home: true

hero:
  name: "Optimux"
  text: "且停且忘且随风，且行且看且从容"
  tagline: 吃喝玩乐~手工宅~游戏宅
  image:
    # 首页右边的图片
    src: /freedom.jpg
    # 图片的描述
    alt: avatar
  actions:
    - theme: brand
      text: 进入主页
      link: /
    - theme: alt
      text: 个人成长
      link: /column/Growing/

features:
  - icon: 
      src: '/freedom.jpg '  
    title: MG174MSN-04沙扎比Ver.Ka
    details: 沙扎比，是由制造方阿纳海姆电子公司制造的机体。基本信息机体番号：MSN-04 驾驶员：夏亚‧阿兹纳布(Char‧Aznable)、 机体名称：サザビー（日文） 沙扎比（中文） SAZABI（英文），机体类型：NT专用型MS 。
    link: '/column/Handmake/Gundam/SAZABI' 
  - icon: 🖖
    title: 成都大熊猫繁育研究基地
    details: 中国四川省成都市成华区熊猫大道1375号
    link: https://www.panda.org.cn/
  - icon: 
      dark: /freedom.jpg
      light: /avatar.jpg
    title: 魔兽世界
    details: 《魔兽世界》（World of Warcraft）是由著名游戏公司暴雪娱乐所制作的第一款网络游戏，属于大型多人在线角色扮演游戏。
    link: '/column/Game/WOW'  

lastUpdated: true
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import home from '/.vitepress/components/home.vue'

const members = [
  {
    avatar: 'avatar.jpg',
    name: 'Optimux Yang',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Strong-Yang' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/47800352' }
    ]
  }
]
</script>

### What you will see.

<VPTeamMembers size="small" :members="members" />
<home />

<!-- 自定义组件 -->
<!-- <script setup>
import home from '/.vitepress/components/home.vue';
</script>

<home /> -->
