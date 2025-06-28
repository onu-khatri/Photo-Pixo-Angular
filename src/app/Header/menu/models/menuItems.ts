export interface MenuItem {
  label: string;
  link: string;
  icon: string;
    children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: 'Home',
    link: '/home',
    icon: 'home',
  },
];
