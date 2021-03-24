import { registerPlugin } from '@capacitor/core';

import type { CapacitorLaunchWithPlugin } from './definitions';

const CapacitorLaunchWith = registerPlugin<CapacitorLaunchWithPlugin>(
  'CapacitorLaunchWith',
  {
    web: () => import('./web').then(m => new m.CapacitorLaunchWithWeb()),
  },
);

export * from './definitions';
export { CapacitorLaunchWith };
