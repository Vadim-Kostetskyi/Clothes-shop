export type MenuItem = {
  id: number;
  href: string;
  label: string;
};

export type MenuContent = {
  help: MenuItem[];
  terms: MenuItem[];
  we_are_NOVA: MenuItem[];
};

export const Context = <MenuContent>{
  help: [
    { id: 0, href: '/payment', label: 'Payment' },
    { id: 1, href: '/delivery', label: 'Delivery' },
    { id: 2, href: '/returns', label: 'Returns' },
    { id: 3, href: '/gift_card', label: 'Gift Card' },
    { id: 4, href: '/guest_purchase', label: 'Guest purchase' },
    { id: 5, href: '/electronic_receipt', label: 'Electronic receipt' },
  ],
  terms: [
    { id: 6, href: '/privacy_policy', label: 'Privacy policy' },
    { id: 7, href: '/cookie_settings', label: 'Cookie settings' },
    { id: 8, href: '/cookies_policy', label: 'Cookies policy' },
    { id: 9, href: '/site_map', label: 'Site Map' },
  ],
  we_are_NOVA: [
    { id: 10, href: '/about_nova', label: 'About Nova' },
    { id: 11, href: '/join_life', label: 'Join Life' },
    { id: 12, href: '/work_with_us', label: 'Work with us' },
    { id: 13, href: '/press', label: 'Press' },
  ],
};

