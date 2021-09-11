module.exports = {
  stories: [
    "../packages/code-ui-*/**/*.stories.mdx",
    "../packages/code-ui-*/**/*.stories.@(js|jsx|ts|tsx)",
    "../demo/**/*.stories.mdx",
    "../demo/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
