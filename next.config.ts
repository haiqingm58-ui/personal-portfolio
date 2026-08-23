import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'personal-portfolio';
const pagesBasePath = `/${repositoryName}`;

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      basePath: pagesBasePath,
      assetPrefix: pagesBasePath,
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
