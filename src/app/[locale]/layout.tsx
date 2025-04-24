import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import StoreProvider from '@/store/storeProvider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import '../globals.css';

export const generateMetadata = async ({ params }: { params: { locale: string } }) => {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    title: 'Fast Cart',
    description: 'Описание твоего сайта на нескольких языках',
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        ru: '/ru'
      }
    }
  };
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="max-w-[1520px] m-auto">
        <StoreProvider>
          <Header />
          <div className="h-[50px] sm:w-[100px] sm:h-[120px]"></div>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
