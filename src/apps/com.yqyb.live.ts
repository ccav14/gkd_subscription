import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yqyb.live',
  name: '我是中医',
  groups: [
    {
      key: 0,
      name: '自动签到测试',
      enable: true,
      rules: [
        {
          // 暂时去掉 activityIds 和多余限制，只匹配文字
          matches: '[text="立即签到"]',
        },
      ],
    },
  ],
});
