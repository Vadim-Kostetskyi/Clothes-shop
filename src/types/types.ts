import BlackColor from 'assets/images/chooseColor/black.png';
import WhiteColor from 'assets/images/chooseColor/white.png';

export enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export enum Color {
  Black = 'black',
  White = 'white',
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

export const clothesColors: Record<Color, string> = {
  [Color.Black]: BlackColor,
  [Color.White]: WhiteColor,
};

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
