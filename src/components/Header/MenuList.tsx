import { MenuItem } from 'components/Footer/MenuList';

export type MenuContent = {
  [key: string]: MenuItem[];
};

export const menuName: MenuItem[] = [
  { id: 0, href: '/women', label: 'Women' },
  { id: 1, href: '/men', label: 'Men' },
  { id: 2, href: '/kids', label: 'Kids' },
];

export const menuList: MenuContent = {
  Women: [],
  Men: [
    { id: 0, href: '/new_now', label: 'New now' },
    { id: 1, href: '/clothing', label: 'Clothing' },
    { id: 2, href: '/suits', label: 'Suits' },
    { id: 3, href: '/shoes_and_accessories', label: 'Shoes and accessories' },
    { id: 4, href: '/promotion', label: 'Promotion' },
    { id: 5, href: '/collection', label: 'Collection' },
  ],
  Kids: [],
};
