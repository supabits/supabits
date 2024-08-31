import type { Config } from 'tailwindcss';

import sharedConfig from '@repo/tailwind-config';

const config: Config = {
  content: sharedConfig.content,
  presets: [sharedConfig],
};
export default config;
