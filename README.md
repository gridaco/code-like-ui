![](./branding/cover.png)

# @code-ui

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
  lang={"jsx"} // defaults to js - "js" | "dart" | "paython" | LanguageConfig
  style={"monokai"} // default style = monokai
  padding={"10px"}
  controls={[
      platform_field,
      lang_field,
  ]}
  expandableConfig={
      lines: 2,
      expandable: true
      hidable: true
  }
  onChange={(field, value) => {
      //
  }}
/>;

//

```

```ts
export interface LanguageConfig {
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
    mid: 8,
    end: 8,
  },
};
```

## Comlex Example

**creating field**

```ts
let lang = "tsx";
const onLangChange = (v) => {
    lang = v
}
const lang_field  = {
    tag: "@"
    name: "lang",
    template?: `{{ tag }}{{ name }}{{ option.name }}`
    options: [
        {
            name: "Flutter",
            value: "platform.flutter",
            description: "flutter",
        }
    ]
}

const platform_field  = {
    tag: "@"
    name: "platform",
    template: `{{ tag }}{{ name }}{{ value }} (juice.${lang})`
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
  template?: string;
  enabled?: boolean;
  // value: string
  options?: Option<T>[];
}
```

## The design

Design resource of code-ui is [avalable here][designlink]. For edit permission, please contact us via universe@grida.co

### Color schemes

For more color scheme options & customization, read [docs/color-scheme.md](./docs/color-scheme.md)

## Proposals

- [Easy configurable view with json IO](https://github.com/gridaco/code-like-ui/issues/1)

## References

- [vscode-webview-ui-toolkit](https://github.com/microsoft/vscode-webview-ui-toolkit)
- https://material-ui.com/components/selects/

[designlink]: https://www.figma.com/file/nHJQZjVwnF2dtx153MS9J1/code-ui?node-id=2%3A354
