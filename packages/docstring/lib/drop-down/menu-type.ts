import { Option } from "../field/type";

export interface IDropDown<T = string> {
  id: string;
  onSelect: (item: T) => void;
  items: Option<T>[];
}
