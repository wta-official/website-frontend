import Wrapper from '@/components/layout';

export const metadata = {
  title: 'WTA',
  description: 'Working Talent Agency',
  icons: {
    icon: '/images/companyLogoBlue.svg', // Favicon
    shortcut: '/images/companyLogoBlue.svg',
    apple: '/images/companyLogoBlue.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
