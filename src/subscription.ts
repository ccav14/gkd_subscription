import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1233,
  name: '自用',
  version: 1,
  author: 'ccav14',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/ccav14/gkd_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
