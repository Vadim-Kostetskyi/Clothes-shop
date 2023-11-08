import { MenuItem } from 'components/Footer/MenuList';

export type MenuContent = {
  [key: string]: MenuItem[];
};

export const menuName: MenuItem[] = [
  { id: 0, href: '/women', label: 'Women' },
  { id: 1, href: '/men', label: 'Men' },
  { id: 2, href: '/kids', label: 'Kids' },
];

export const category: MenuContent = {
  Women: [],
  Men: [
    { id: 0, href: '/newNow', label: 'New now' },
    { id: 1, href: '/clothing', label: 'Clothing' },
    { id: 2, href: '/suits', label: 'Suits' },
    { id: 3, href: '/shoesAndAccessories', label: 'Shoes and accessories' },
    { id: 4, href: '/promotion', label: 'Promotion' },
    { id: 5, href: '/collections', label: 'Collections' },
  ],
  Kids: [],
};

export const subcategory: MenuContent = {
  Women: [],
  Men: [
    { id: 0, href: '/seeAll', label: 'See all' },
    { id: 1, href: '/coats', label: 'Coats' },
    { id: 2, href: '/cardigansAndSweaters', label: 'Cardigans and sweaters' },
    { id: 3, href: '/jacketsAndOvershirts', label: 'Jackets and overshirts' },
    { id: 4, href: '/tourers', label: 'Tourers' },
    { id: 5, href: '/shirts', label: 'Shirts' },
    { id: 6, href: '/jeans', label: 'Jeans' },
  ],
  Kids: [],
};
