export interface CapacitorLaunchWithPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
