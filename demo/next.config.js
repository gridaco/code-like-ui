const withTM = require('next-transpile-modules')([
  '@code-ui/docstring',
  '@code-ui/interface',
  '@code-ui/token',
  '@code-ui/color-scheme',
]);
module.exports = withTM({
  reactStrictMode: true,
});
