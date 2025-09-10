import '@/app/ui/global.css';
// import { avenir } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${avenir.className} antialiased`}>{children}</body> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

