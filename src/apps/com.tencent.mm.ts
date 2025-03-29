import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
{
      key: 0,
      name: '立即签到',
      rules: [
             {
	activityIds: '.plugin.appbrand.ui.AppBrandUI00',
	
 matches: [
            '[text="立即签到"][visibleToUser=true]',
          ],
             
},
            ],  
},
          ],

});
