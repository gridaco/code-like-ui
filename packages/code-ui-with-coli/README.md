# `@code-ui/coli` - Code UI For Coli Projects

## Installation

```sh
# required
yarn add @code-ui/coli
# (optional) if non installed
yarn add coli
```

## Usage

**1. non jsx**

> Use only coli syntax

```tsx
import { Identifier, Selection, StringLiteral, TypeRefernce } from "@code-ui/control-tokens/objects"
import {
    VariableDeclaration
} "coli";
import { ColiCodeView } from "@code-ui/coli"

function TypeSelectableVariableDeclaration(){
    const coli = new VariableDeclaration({
        name: new Identifier("data", {
            kind: "let",
            type: new TypeRefernce(new Identifier()) ///?
        })
    })
    return <ColiCodeView coli={coli}/>
}
```

**2. jsx**

> Mixed use with coli objects and @code-ui jsx

```tsx
import { Selection } from "@code-ui/control-tokens/objects"
import {
    VariableDeclaration
} "coli";

function TypeSelectableVariableDeclaration(){
    new VariableDeclaration()
    return
}
```

## Contributing to code-ui/coli

Read [contributing.md](./CONTRIBUTING.md)
