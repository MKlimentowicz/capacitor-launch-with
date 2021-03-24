import { WebPlugin } from '@capacitor/core';

import type { CapacitorLaunchWithPlugin } from './definitions';

export class CapacitorLaunchWithWeb
  extends WebPlugin
  implements CapacitorLaunchWithPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
