import type { Metadata } from 'next';
import './globals.css';

const title = '你的名字｜个人作品集';
const description = '设计 × 技术 × 产品思维。把复杂问题，设计成清晰、可用的数字体验。';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title,
    description,
    images: [
      {
        url: '/og.png',
        width: 1733,
        height: 908,
        alt: '把复杂问题，设计成清晰体验。你的名字个人作品集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
