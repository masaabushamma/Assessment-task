export interface itemType {
  itemName: String;
  itemIcon: JSX.Element;
  content: JSX.Element;
  path: string;
  children?: { path: string; content: JSX.Element };
}
