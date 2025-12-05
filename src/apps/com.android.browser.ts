import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.browser',
  name: '浏览器',
  groups: [
    {
      key: 0,
      name: '瑞羚签到',
      rules: [
        {
          matches: '[text="立即签到"][name="android.widget.TextView"][visibleToUser=true]',
       
        },
      ],
    },
    {
      key: 1,
      name: '去观看',
      rules: [
        {
          matches:
            '[text="去观看"][name="android.widget.TextView"][visibleToUser=true]',
        },
      ],
    },
  ],
});
