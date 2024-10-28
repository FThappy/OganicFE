import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Ecobazar',
  description: '100% Trusted Organic Food Store'
};
const popin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased ${popin.className}`}>{children}</body>
    </html>
  );
}
