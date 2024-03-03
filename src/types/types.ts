export enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export enum Color {
  Black = 'Black',
  Beige = 'Beige',
}

export enum HeaderMenu {
  NewNow = 'New now',
  Clothing = 'Clothing',
  Suits = 'Suits',
  ShoesAndAccessories = 'Shoes and accessories',
  Promotion = 'Promotion',
  Collections = 'Collections',
}

export enum Language {
  English = 'en',
  Ukrainian = 'ua',
}

export enum Category {
  CLOTHING = 'CLOTHING',
}

export enum Subcategory {
  JACKETS = 'JACKETS',
  COATS = 'COATS',
  TRENCH = 'TRENCH',
  GILETS = 'GILETS',
  OVERSHIRTS = 'OVERSHIRTS',
  SWEATERS = 'SWEATERS',
  CARDIGANS = 'CARDIGANS',
  QUILTED = 'QUILTED',
}

export enum FilterItems {
  NewNow = 'New now',
  PriceAsc = 'Price low to high',
  PriceDesc = 'Price high to low',
  PriceAscRequest = 'asc',
  PriceDescRequest = 'desc',
}

export type MenuItem = {
  id: number;
  href: string;
  label: string;
};

export type MenuContent = {
  [key: string]: MenuItem[];
};

export type MenuList = {
  id: number;
  listNumber: number;
  contentName: string;
  label: string;
};

export enum Price {
  min = 0,
  max = 1000,
}
