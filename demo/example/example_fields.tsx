import React, { ReactNode } from 'react';

import { IField } from '@code-ui/docstring';
import {
  InterfaceAttr,
  InterfaceFieldProps,
  InterfaceTypeOption,
} from '@code-ui/interface';
import { SuggestionItems } from '@code-ui/completion-provider';

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
  template: `{{ static }}{{ contorl.input }} {`,
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

export const interface_property_field: InterfaceFieldProps = {
  tag: '',
  name: 'buttonText',
  template: `{{ name }} : {{ contorl.dropdown }};`,
  token: {
    contorl: {
      defaultValue: interface_test_options[0],
      options: interface_test_options,
    },
  },
};

export const interface_attr_test_options: InterfaceTypeOption[] = [
  {
    name: 'string',
    value: 'string',
    description: 'string',
  },
  {
    name: 'enum',
    value: 'enum',
    description: 'enum',
  },
];

export const interface_attr1: InterfaceAttr = {
  label: 'coverImage',
  contorls: interface_attr_test_options,
};

export const interface_attr2: InterfaceAttr = {
  label: 'content',
  contorls: interface_attr_test_options,
};

export const subbestions_item_documentation1 = [<>hi</>, <>hi2</>];
export const subbestions_item_documentation2 = [<>hi3</>, <>hi4</>];

export const subbestions_item1: SuggestionItems = {
  id: 'first_id',
  label: 'testing label',
  detail: 'testing detail',
  documentation: subbestions_item_documentation1,
};

export const subbestions_item2: SuggestionItems = {
  id: 'second_id',
  label: 'testing label',
  detail: 'testing detail',
  documentation: subbestions_item_documentation2,
};
