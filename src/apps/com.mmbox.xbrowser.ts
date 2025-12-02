import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mmbox.xbrowser',
  name: 'X浏览器',
  groups: [
    {
      key: 0,
      name: '瑞羚签到',
      rules: [
        {
          activityIds: ['.BrowserActivity'],
          matches: '[text="立即签到"][visibleToUser=true]',
        },
      ],
    },
  ],
});
