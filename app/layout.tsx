import type { Metadata } from 'next';
import './globals.css';

const title = '@haiqingm58-ui｜AI 产品与工程作品集';
const description = 'HumanTwin AI、智慧教学平台、GeoRisk 与开源项目：从产品构想到真实部署。';
const siteUrl = new URL('https://haiqingm58-ui.github.io/personal-portfolio/');
const socialImage = new URL('og.png', siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  authors: [{ name: '@haiqingm58-ui', url: 'https://github.com/haiqingm58-ui' }],
  creator: '@haiqingm58-ui',
  keywords: ['AI 产品', 'Flutter', 'React', 'FastAPI', 'RAG', '知识图谱', '个人作品集'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteUrl,
    siteName: '@haiqingm58-ui 作品集',
    title,
    description,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'AI × 工程 × 真实场景，@haiqingm58-ui 项目作品集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
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
