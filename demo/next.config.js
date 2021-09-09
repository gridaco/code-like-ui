const withTM = require('next-transpile-modules')([
  '@code-ui/docstring',
  '@code-ui/interface',
  '@code-ui/token',
  '@code-ui/color-scheme',
  '@code-ui/completion-provider',
  '@code-ui/hover',
]);
module.exports = withTM({
  reactStrictMode: true,
});
