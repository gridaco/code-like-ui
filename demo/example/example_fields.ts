import { IField } from '@code-ui/docstring';
import { InterfaceFieldProps } from '../../packages/interface/lib/type';

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

export const interface_field: InterfaceFieldProps = {
  tag: '',
  template: `{{ tag }}{{ static.keword }}{{ contorl.input }} {`,
  token: {
    static: { keyword: 'interface' },
    contorl: { defaultValue: 'Props' },
  },
};

export const interface_test_options = [
  {
    name: 'string',
    value: 'type.string',
    description: 'string',
  },
  {
    name: 'enum',
    value: 'type.enum',
    description: 'enum',
  },
];

export const interface_property_Field: InterfaceFieldProps = {
  tag: '',
  name: 'buttonText',
  template: `{{ tag }}{{ name }} : {{ contorl.dropdown }} ;`,
  token: {
    contorl: {
      defaultValue: interface_test_options[0],
      options: interface_test_options,
    },
  },
};
