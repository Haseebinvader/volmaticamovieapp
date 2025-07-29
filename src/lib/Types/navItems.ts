export interface NavItem {
  name: string;
  path?: string;
  dropdown?: boolean;
  items?: { name: string; path: string }[];
}