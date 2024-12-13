import Wrapper from "@/components/layout"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
        {children}
        </Wrapper>
        </body>
    </html>
  )
}
