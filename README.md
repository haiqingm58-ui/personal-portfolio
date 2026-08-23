# @haiqingm58-ui 个人作品集

![AI、工程与真实场景主题的作品集分享封面](public/og.png)

一个聚合真实项目的中文个人作品集，覆盖移动端数字人体、AI 教学平台、地质灾害知识系统与作品集工程。

## 在线访问

[打开 GitHub Pages 作品集](https://haiqingm58-ui.github.io/personal-portfolio/)

## 收录项目

- [HumanTwin AI](https://github.com/HumanTwinAI-123/HumanTwin-AI)：Flutter、Android 与本地 3D Viewer
- [《基础工程》智慧学伴](https://github.com/haiqingm58-ui/foundation-smart-companion)：React、Vite、FastAPI 与 RAG
- [GeoRisk](https://gitee.com/georisk/geo-rag)：FastAPI、RAG 与知识图谱
- [个人作品集](https://github.com/haiqingm58-ui/personal-portfolio)：Next.js 静态导出与 GitHub Pages 自动发布

## 技术栈

- Next.js、React、TypeScript
- 响应式 CSS 与无障碍导航
- Open Graph 社交分享元数据
- GitHub Actions 与 GitHub Pages

## 本地运行

```bash
npm install
npm run dev
```

然后访问 `http://localhost:3000`。

## 构建

本地生产构建：

```bash
npm run build
```

GitHub Pages 静态导出：

```bash
GITHUB_ACTIONS=true \
GITHUB_REPOSITORY=haiqingm58-ui/personal-portfolio \
npm run build:pages
```

推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会自动发布 `out/`。
