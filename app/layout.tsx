import '@/app/ui/global.css'    // 导入全局 CSS 样式
import { inter } from '@/app/ui/fonts';   // 导入字体

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
