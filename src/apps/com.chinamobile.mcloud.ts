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
          key: 0,
          name: '1.点击【继续赚云朵】',
          // 刚进页面，加 500ms 延迟等待弹窗稳固
          actionDelay: 500,
          matches:
            '[text="继续赚云朵"][name="android.widget.TextView"][visibleToUser=true]',
        },
        {
          key: 1,
          name: '2.点击【领云朵】',
          // 关键点：点掉第一个弹窗后，H5 可能有刷新或动画，加 1000ms 延迟
          matches: '[text="领云朵"][visibleToUser=true]',
        },
        {
          key: 2,
          name: '3.点击【知道啦】',
          // 领取成功到弹窗弹出也需要反应时间
          actionDelay: 800,
          actionMaximum: 1,
          matches:
            '[text="知道啦"][name="android.widget.TextView"][visibleToUser=true]',
        },
      ],
    },
  ],
});
