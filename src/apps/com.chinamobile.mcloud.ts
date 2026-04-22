import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 10,
      name: '自动签到',
      desc: '自动点击继续赚云朵-领云朵-知道啦',
      enable: true,
      rules: [
             {
          key: 1,
          name: '2.点击【领云朵】',
          // 关键点：点掉第一个弹窗后，H5 可能有刷新或动画，加 1000ms 延迟
          matches: '[text="领云朵"]<< View',
        },
             ],
    },
  ],
});
