import { IField } from '../../packages/docstring/lib/field/type';

export const docstring_lang_field: IField = {
  tag: '@',
  name: 'lang',
  template: `{{ tag }}{{ name }} {{ option }}`,
  options: [
    {
      name: 'javascript',
      value: 'lang.javascript',
      description: 'javascript',
    },
    {
      name: 'dart',
      value: 'lang.dart',
      description: 'dart',
    },
  ],
};

const lang = 'jsx';

export const docstring_platform_field: IField = {
  tag: '@',
  name: 'platform',
  template: `{{ tag }}{{ name }} {{ options }} (juice.${lang})`,
  options: [
    {
      name: 'React',
      value: 'platform.react',
      description: 'tsx',
    },
    {
      name: 'Flutter',
      value: 'platform.flutter',
      description: 'flutter',
    },
  ],
};
