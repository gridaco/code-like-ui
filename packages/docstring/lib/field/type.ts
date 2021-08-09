export interface Option<T> {
  name: string;
  value: T;
  description?: string;
}

export interface IField<T = string> {
  tag?: "@";
  name: string;
  enabled?: boolean;
  template?: string;
  options?: Option<T>[];
}
