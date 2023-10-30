// import { createContext, useContext } from "react"
// import { MenuItem } from "components/Footer/MenuList";

// export type MenuContent = {
//   m1: MenuItem[],
//   m2: MenuItem[],
//   m3: MenuItem[]
// }

// export const MyContext = createContext<MenuItem[]>({
//   [{ id: 0, href: '/payment', label: 'Women' },
//   { id: 1, href: '/delivery', label: 'Men' },
//   { id: 2, href: '/returns', label: 'Kids' }]
// })

// export const MenuContext = () => useContext(MyContext)

import { createContext } from 'react';

// Define the type for the menu item
interface MenuItem {
  id: number;
  href: string;
  label: string;
}

// Creating a context with default values
const defaultMenuItems: MenuItem[] = [
  { id: 0, href: '/payment', label: 'Women' },
  { id: 1, href: '/delivery', label: 'Men' },
  { id: 2, href: '/returns', label: 'Kids' }
];

export const MyContext = createContext<MenuItem[]>(defaultMenuItems);
