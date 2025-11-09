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
      name: '朱签到2',
      rules: [
        {
          matches:
            'Button[text="点击签到"][clickable=true][visibleToUser=true]',
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
        },
      ],
    },
    {
      key: 5,
      name: '雷签到2',
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI01'],
          matches: '[text="点击打卡"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 6,
      name: '雷签到3',
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
          matches: '[text="点击打卡"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 7,
      name: '远方领券177',
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
          matches: '[text="立即领取(177s过期)"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 8,
      name: '远方领券176',
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
          matches: '[text="立即领取(176s过期)"][visibleToUser=true]',
        },
      ],
    },
  ],
});
