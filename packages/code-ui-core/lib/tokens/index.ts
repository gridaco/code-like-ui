export abstract class TokenObject<T = any> {}
export class GroupToken extends TokenObject {
  children: TokenObject[];
}
export class StaticToken extends TokenObject {}

export abstract class ControlToken extends TokenObject {}
export class InputToken extends ControlToken {}
export class SelectInputToken extends InputToken {}
export class SuggestionsSelectInputToken extends SelectInputToken {}
