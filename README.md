# code-like-ui

ui controls seamlessly embedded in code style block

## What is it?

![](branding/control-in-comment.png)

## Installation

```sh
yarn add code-like-ui
# or with npm
npm i code-like-ui
```

## Simple Usage

```tsx
import CodeLikeView from "code-like-ui";

// ...
<CodeLikeView
  lang={} // defaults to js - "js" | "dart" | "paython" | LanguageConfig
  controls={[
      platform_field
  ]}
  expandableConfig={
      lines: 2,
      expandable: true
      hidable: true
  }

/>;
// ...
```

```ts
interface LanguageConfig {
  docstring: {
    start: string;
    mid?: string;
    end: string;
  };
  indent: {
    start?: number;
    mid?: number;
    end: number;
  };
}

type LanguageType = "js" | "dart" | "paython" | LanguageConfig;

const jsstyle: LanguageConfig = {
docstring: {
    start: "/**",
    mid: "*",
    end: "*/",
  },
  indent: {
    mid: 8;
    end: 8;
  };
};



```

## Comlex Example

**creating field**

```ts
const platform_field  = {
    tag: "@"
    name: "platform"
    options: [
        {
            name: "Flutter",
            value: "platform.flutter",
            description: "flutter",
        }
    ]
}
```

## Props

```ts
///
interface Option<T> {
  name: string;
  value: T;
  desc?: string;
}

interface Field<T = string> {
  tag: "@" | "";
  name: string;
  enabled?: boolean;
  // value: string
  options?: Option<T>[];
}
```
