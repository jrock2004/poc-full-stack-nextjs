import '@/styles/global.css';
import { Inter } from '@next/font/google';
import clsx from 'clsx';

import Sidebar from '@/components/Sidebar';
import GlassPane from '@/components/GlassPane';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function DashboardRootLayout({ children }: any) {
  return (
    <html lang="en" className={clsx(inter.variable, 'dark')}>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full p-6 flex align-center container mx-auto">
          <Sidebar />
          <main id="modal" className="w-full pl-6 h-full">
            {children}
          </main>
        </GlassPane>
      </body>
    </html>
  );
}
