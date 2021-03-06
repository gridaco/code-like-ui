import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Docstring } from '@code-ui/docstring';
import { Interface } from '@code-ui/interface';
import React, { useState } from 'react';
import {
  docstring_lang_field,
  docstring_platform_field,
  interface_attr1,
  interface_attr2,
  subbestions_item1,
  subbestions_item2,
} from '../example/example_fields';
import { BasedToken } from '@code-ui/token';
import { Suggestions } from '@code-ui/completion-provider';
import { AutoComplete } from '../example/auto-complete';

export default function Home() {
  const [sugSelectedId, setSugSelectedId] = useState(subbestions_item1.id);

  function handleClick(field: string, value: string) {
    console.log(field);
    console.log(value);
  }

  function basedTokenHover(isOver: boolean) {
    console.log(isOver);
  }

  function suggestionsSelect(id: string) {
    setSugSelectedId(id);
    console.log(`selected id is %c - ${id}`, 'color: red');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <AutoComplete />
        <BasedToken
          onClick={() => {
            console.log('onClicked');
          }}
          onDoubleClick={() => {
            console.log('onDoubleClick');
          }}
          onHover={basedTokenHover}
          hoverOverlayColor={'rgba(157, 178, 255, 0.25)'}
          cornerRadius={2}
          contentPadding={2}
          contentColor="#D7D7D7"
          backgroundColor="#3A3842"
          content={<span>hi</span>}
        />

        <Suggestions
          items={[subbestions_item1, subbestions_item2]}
          selectedId={sugSelectedId}
          onSelected={suggestionsSelect}
        />

        <Interface
          lang={'js'}
          theme={'monokai'}
          onChange={handleClick}
          interfaceName={'Props'}
          attrs={[interface_attr1, interface_attr2]}
        />

        <Docstring
          lang="dart" // defaults to js - "js" | "dart" | "paython" | LanguageConfig
          theme={'monokai'} // default style = monokai
          padding={'10px'}
          controls={[docstring_platform_field, docstring_lang_field]}
          expandableConfig={{
            lines: 2,
            expandable: true,
            hidable: true,
          }}
          onChange={handleClick}
        />
      </body>
    </div>
  );
}
