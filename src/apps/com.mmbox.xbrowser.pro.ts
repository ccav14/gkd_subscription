import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mmbox.xbrowser.pro',
  name: 'X浏览器',
  groups: [
    {
      key: 0,
      name: '瑞羚签到',
      enable: false,
      rules: [
        {
          matches: '[text="立即签到"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '瑞羚签到2',
      rules: [
        {
          matches:
            '[text="立即签到"][name="android.widget.TextView"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 2,
      name: '进入直播',
      enable: false,
      rules: [
        {
          activityIds: ['com.mmbox.xbrowser.pro.BrowserActivity'],
          matches:
            '[text="进入直播"][name="android.widget.TextView"][visibleToUser=true]',
        },
      ],
    },
  ],
});
