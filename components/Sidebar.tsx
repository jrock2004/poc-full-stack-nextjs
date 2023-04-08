import { FC } from 'react';

import Card from './Card';
import Image from 'next/image';
import SidebarLink from './SidebarLink';

const links: TLink[] = [
  { label: 'Home', icon: 'Grid', link: '/home' },
  {
    label: 'Calendar',
    icon: 'Calendar',
    link: '/calendar',
  },
  { label: 'Profile', icon: 'User', link: '/profile' },
  {
    label: 'Settings',
    icon: 'Settings',
    link: '/settings',
  },
];

const Sidebar: FC = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      {links.map((link, index) => (
        <SidebarLink key={`link-${index}`} link={link} />
      ))}
    </Card>
  );
};

export type TLink = {
  label: string;
  icon: string;
  link: string;
};

export default Sidebar;
