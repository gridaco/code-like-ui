import { Option } from "../field/type";

export interface IDropDown<T = string> {
  id: string;
  items: Option<T>[];
}
