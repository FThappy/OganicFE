import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { SupportedLocale } from '@/i18n/request';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';
import ToastifyContainer from '@/components/ToastifyContainer/ToastifyContainer';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Ecobazar',
  description: '100% Trusted Organic Food Store'
};
const popin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export default async function RootLayout({
  children,
  // modalProduct,
  params
}: Readonly<{
  children: React.ReactNode;
  // modalProduct: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const locale = (await params).lang;
  if (!routing.locales.includes(locale as SupportedLocale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`antialiased ${popin.className} relative`}>
        <NextTopLoader showSpinner={false} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className=' mt-[198px]'>
            {children}
            {/* <div className='relative z-[80]'></div> */}
            {/* <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen'>
              {modalProduct}
            </div> */}
          </main>
          <Footer />
        </NextIntlClientProvider>

        <ToastifyContainer />
      </body>
    </html>
  );
}
