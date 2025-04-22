import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import StoreProvider from '@/store/storeProvider'
import Header from '@/components/header'
import '../globals.css'; 
import Footer from '@/components/footer'
// import { getTranslations } from 'next-intl/server'
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  } 
  // const t = await getTranslations('HomePage');
  return (
    <html lang={locale}>
      <body>
      <StoreProvider>
        <Header />
        <div className='h-[50px] sm:w-[100px] sm:h-[120px]'></div>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Footer/>
      </StoreProvider>
      </body>
    </html>
  );
}