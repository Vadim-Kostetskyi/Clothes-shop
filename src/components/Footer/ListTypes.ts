export type MenuItem = {
  id: number;
  href: string;
  label: string;
}

export type MenuContent = {
  [key: string]: MenuItem[];
}

export type MenuList = {
  id: number;
  listNumber: number
  contentName: string;
  label: string;
}