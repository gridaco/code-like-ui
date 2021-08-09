export interface Option<T> {
  name: string;
  value: T;
  desc?: string;
}

export interface Field<T = string> {
  tag?: "@" | "";
  name: string;
  enabled?: boolean;
  options?: Option<T>[];
}
