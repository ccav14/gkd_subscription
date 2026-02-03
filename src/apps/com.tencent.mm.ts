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
        }，
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
      name: '雷签到4',
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI01'],
          matches: '[text="立即签到"][visibleToUser=true]',
        },
      ],
    },
    {
      // 注意：key 8 重复了，我保留了您的 key 8，并添加了逗号。
      // 建议将第二个 key 改为 key: 9 或更高的数字以避免重复。
      key: 8,
      name: '雷签到41-1', // 重命名以区分
      enable: false,
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI01'],
          matches: '[text="立即签到"][name="android.widget.Button"]',
        },
      ],
    }, // <--- 修正 1: 确保逗号存在
    {
      key: 9, // <--- 建议改为 9，避免 key 重复
      name: '雷签到41-2', // 重命名以区分
      enable: false,
      rules: [
        {
          activityIds: ['.plugin.appbrand.ui.AppBrandUI01'],
          matches:
            '[name="android.widget.Button"][text="立即签到"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 10,
      name: '远方领券',
      rules: [
        {
          matches: '[text$="立即领取"][visibleToUser=true]',
        },
      ],
    },
  ], // <--- 修正 2: 移除了多余的 ']' 和 '}'
});
