import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.browser',
  name: '浏览器',
  groups: [
    {
      key: 0,
      name: '瑞羚签到',
      enable: false,
      rules: [
        {
          matches: '[text="去观看"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '瑞羚签到2',
      enable: false,
      rules: [
        {
          matches:
            '[text="去观看"][name="android.widget.TextView"][visibleToUser=true]',
        },
      ],
    },
  ],
});
