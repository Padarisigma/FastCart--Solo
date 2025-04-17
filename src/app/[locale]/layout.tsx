import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { getTranslations } from 'next-intl/server'
 
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

  const t = await getTranslations('HomePage');
 
  return (
    <html lang={locale}>
      <body>
        <header>
          <nav>
            <ul>
              <li>{t('navbar.home')}</li>
              <li>{t('navbar.blog')}</li>
              <li>{t('navbar.contact')}</li>
              <li>{t('navbar.wishlist')}</li>
            </ul>
          </nav>
        </header>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}