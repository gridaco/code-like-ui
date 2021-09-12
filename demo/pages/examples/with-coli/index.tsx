import React from 'react';
import {
  Identifier,
  InterfaceDeclaration,
  LiteralType,
  PropertySignature,
  StringLiteral,
  TypeReference,
  VariableDeclaration,
  JSX,
  Types,
  Function,
  JSXOpeningElement,
  JSXClosingElement,
  JSXAttribute,
  JSXElement,
  JSXExpression,
  JSXIdentifier,
  JSXSelfClosingElement,
  PropertyAccessExpression,
  SourceFile,
  Import,
  TaggedTemplateExpression,
  TemplateLiteral,
  Block,
  Return,
} from 'coli';
import { ColiCodeView } from '@code-ui/coli';

const AppbarFile = new SourceFile({
  name: 'Appbar.tsx',
  path: 'src/components',
});

// import React, { useEffect, useState } from "react"
const importReact = new Import()
  .importDefault('React')
  .and('useEffect', 'useState')
  .from('react');

// import styled from "@emotion/styled"
const inportStyled = new Import()
  .importDefault('styled')
  .from('@emotion/styled');

const styledIdentifier = new Identifier('styled');

const Wrapper = new VariableDeclaration('Wrapper', {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, 'div'),
    {
      template: new TemplateLiteral(`
        margin: 60px 20px;
      `),
    },
  ),
  kind: 'const',
});

const TitleAndAvatarWrapper = new VariableDeclaration('TitleAndAvatarWrapper', {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, 'div'),
    {
      template: new TemplateLiteral(`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `),
    },
  ),
  kind: 'const',
});

const Title = new VariableDeclaration('Title', {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, 'div'),
    {
      template: new TemplateLiteral(`
        font-size: 36px;
      `),
    },
  ),
  kind: 'const',
});

const Message = new VariableDeclaration('Message', {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, 'div'),
    {
      template: new TemplateLiteral(`
        color: #a4a4a4;
        font-size: 14px;
      `),
    },
  ),
  kind: 'const',
});

const Avatar = new VariableDeclaration('Avatar', {
  initializer: new TaggedTemplateExpression(
    new PropertyAccessExpression(styledIdentifier, 'img'),
    {
      template: new TemplateLiteral(`
        margin-left: 20px;
      `),
    },
  ),
  kind: 'const',
});

/**
 * function Appbar(props: {
 *  title: string,
 *  message: string,
 *  avatar: string
 * }) {
 *  return <Wrapper>
 *      <TitleAndAvatarWrapper>
 *          <Title>{props.title}</Title>
 *          <Avatar src={props.avatar}/>
 *      </TitleAndAvatarWrapper>
 *      <Message>{props.message}</Message>
 *  </Wrapper>
 * }
 */

const AppbarBody = new Block().add(
  new Return(
    // Wrapper
    JSX.tag('Wrapper', {
      children: [
        // TitleAndAvatarWrapper
        JSX.tag('TitleAndAvatarWrapper', {
          children: [
            // Title
            JSX.tag('Title', {
              children: [
                JSX.exp(
                  new PropertyAccessExpression(
                    new Identifier('props'),
                    'title',
                  ),
                ),
              ],
            }),
            // Avatar
            JSX.tag('Avatar', {
              attributes: [
                new JSXAttribute(
                  'src',
                  new JSXExpression(
                    new PropertyAccessExpression(
                      new Identifier('props'),
                      'avatar',
                    ),
                  ),
                ),
              ],
            }),
          ],
        }),
        // Message
        JSX.tag('Message', {
          children: [
            JSX.exp(
              new PropertyAccessExpression(new Identifier('props'), 'message'),
            ),
          ],
        }),
      ],
    }).make(),
  ),
);

const Appbar = new Function('Appbar')
  .withParams(
    new Identifier('props', {
      typeAnnotation: Types.struct({
        title: 'string',
        message: 'string',
        avatar: 'string',
      }),
    }),
  )
  .withBody(AppbarBody);

// region make file
AppbarFile.imports(importReact.make(), inportStyled.make());
AppbarFile.declare(Appbar.make());
AppbarFile.declare(Wrapper, TitleAndAvatarWrapper, Title, Message, Avatar);

function ExampleColiVarView() {
  // return <ColiCodeView coli={example_interface} />;
  console.log(AppbarFile);
  //@ts-ignore
  return <ColiCodeView coli={AppbarFile.blocks} />;
}

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
  return <ExampleColiVarView />;
  // return <ColiCodeView coli={example_interface} />;
  //
}
