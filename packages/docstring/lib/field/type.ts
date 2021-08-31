import { Option } from "@code-ui/type";
export interface IField<T = string> {
  tag?: "@";
  name: string;
  enabled?: boolean;
  template?: string;
  options?: Option<T>[];
}
