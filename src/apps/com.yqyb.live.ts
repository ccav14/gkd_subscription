import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yqyb.live',
  name: '壹云',
  groups: [
    {
      key: 0,
      name: '自动签到',
      enable: true,
      rules: [
        {
          activityIds: ['io.dcloud.PandoraEntryActivity'],
          matches: '[text="立即签到"][visibleToUser=true]',
        },
      ],
    },
  ],
});
