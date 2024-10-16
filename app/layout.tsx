import '@/app/ui/global.css'    // 导入全局 CSS 样式
import { inter } from '@/app/ui/fonts';   // 导入字体
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard xxxxxx',
    default: 'Acme Dashboard jjjjj',
  },
  description: 'The official Next.js Course Dashboard, built with App Router. 24r5',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
