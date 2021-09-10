import { ReactNode } from "react";
export interface Option<T> {
  name: string | ReactNode;
  value: T;
  description?: string;
}

export interface IDropDown<T = string> {
  id: string;
  onSelect: (item: T) => void;
  items: Option<T>[];
}
