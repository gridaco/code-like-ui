import React from 'react';
import {
  Identifier,
  InterfaceDeclaration,
  LiteralType,
  PropertySignature,
  StringLiteral,
  TypeReference,
  VariableDeclaration,
} from 'coli';
import { ColiCodeView } from '@code-ui/coli';

const example_coli_var = new VariableDeclaration('data', {
  kind: 'const',
  type: new TypeReference({
    typeName: new Identifier('string'),
  }),
  initializer: new StringLiteral('hello world'),
});

const example_interface = new InterfaceDeclaration({
  name: 'Example',
  members: [
    new PropertySignature({
      name: new Identifier('key'),
      type: new LiteralType(new StringLiteral('hello world')),
    }),
  ],
});

export default function WithColiPage() {
  return <ColiCodeView coli={example_interface} />;
  //
}
