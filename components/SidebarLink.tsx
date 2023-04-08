'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Settings, User, Grid, Calendar, Icon } from 'react-feather';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { TLink } from './Sidebar';

const icons: any = { Settings, User, Grid, Calendar };

const SidebarLink: FC<TSidebarLink> = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

  const Icon: Icon = icons[link.icon];

  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          'stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out',
          isActive && 'stroke-violet-600'
        )}
      />
    </Link>
  );
};

export type TSidebarLink = {
  link: TLink;
};

export default SidebarLink;
