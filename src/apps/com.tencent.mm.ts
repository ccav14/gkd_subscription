import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '瑞羚厚德签到',
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
          matches: '[text="立即签到"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '白签到',
      rules: [
        {
          activityIds: ['.plugin.webview.ui.tools.MMWebViewUI'],
          matches: '[text="立即签到"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 2,
      name: '雷签到',
      rules: [
        {
          activityIds: ['.plugin.webview.ui.tools.MMWebViewUI'],
          matches: '[text="点击签到"][visibleToUser=true]',
        },
      ],
    },
     {
      key: 3,
      name: '朱签到',
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
          matches: '[text="点击签到"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 4,
      name: '瑞羚签到2',
      rules: [
        {
          matches:
            'Button[text="立即签到"][clickable=true][visibleToUser=true]',
          activityIds: ['.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
  ],
});
