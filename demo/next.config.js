const withTM = require('next-transpile-modules')([
  '@code-ui/docstring',
  '@code-ui/interface',
  '@code-ui/token',
]);
module.exports = withTM({
  reactStrictMode: true,
});
