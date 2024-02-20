import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: async config => {
    const alias = config?.resolve?.alias || {};
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...alias,
          "@": path.resolve(__dirname, "../src/"),
        },
        fallback: {
          ...config.resolve?.fallback,
          zlib: false,
          fs: false,
          stream: false,
          os: false,
        },
      },
    };
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
