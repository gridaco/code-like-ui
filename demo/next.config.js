const withTM = require('next-transpile-modules')([
  '@code-ui/docstring',
  '@code-ui/interface',
  '@code-ui/token',
  '@code-ui/color-scheme',
  '@code-ui/completion-provider',
  '@code-ui/hover',
  '@code-ui/coli',

  // lib/coli
  'coli',
  '@coli.codes/escape-string',
  '@coli.codes/core-syntax-kind',
]);
module.exports = withTM({
  reactStrictMode: true,
});
