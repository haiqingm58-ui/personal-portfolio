import type { Metadata } from 'next';
import './globals.css';

const title = '你的名字｜个人作品集';
const description = '设计 × 技术 × 产品思维。把复杂问题，设计成清晰、可用的数字体验。';
const siteUrl = new URL('https://clear-experience-portfolio.hq-space-0437.chatgpt.site');
const socialImage = new URL('/og.png', siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: socialImage,
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
    images: [socialImage],
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
