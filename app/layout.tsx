import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sarah Johnson - Creative Designer',
  description:
    'Creative designer specializing in brand identity, UI/UX design, and digital experiences.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
