const projects = [
  {
    number: '01',
    title: 'HumanTwin AI',
    type: 'Flutter · Android · 3D Viewer',
    year: '2026',
    summary:
      '从三视图照片采集到数字人体查看，完成一条可运行、可在 Android 真机验证的产品体验。',
    role: '产品流程 / Flutter 前端 / Android 真机验证',
    theme: 'humantwin',
    links: [
      { label: '查看源码', href: 'https://github.com/HumanTwinAI-123/HumanTwin-AI' },
      { label: 'v0.1.0 发布版', href: 'https://github.com/HumanTwinAI-123/HumanTwin-AI/releases/tag/v0.1.0' },
    ],
  },
  {
    number: '02',
    title: '《基础工程》智慧学伴',
    type: 'React · FastAPI · RAG',
    year: '2026',
    summary:
      '面向学生、教师与管理员的教学平台，把智能问答、题库、组卷与学情分析放进同一套工作流。',
    role: '全栈产品 / React + Vite / FastAPI + RAG',
    theme: 'foundation',
    links: [
      { label: '在线体验', href: 'https://haiqingm58-ui.github.io/foundation-smart-companion/' },
      { label: 'GitHub', href: 'https://github.com/haiqingm58-ui/foundation-smart-companion' },
    ],
  },
  {
    number: '03',
    title: 'GeoRisk',
    type: 'FastAPI · RAG · Knowledge Graph',
    year: '2026',
    summary:
      '面向地质灾害知识检索与研判的产品，把 RAG、知识图谱、来源证据与智能会话组织在同一系统中。',
    role: '产品与全栈 / FastAPI / RAG + 知识图谱',
    theme: 'georisk',
    links: [
      { label: 'Gitee 源码', href: 'https://gitee.com/georisk/geo-rag' },
    ],
  },
  {
    number: '04',
    title: '个人作品集',
    type: 'Next.js · GitHub Actions · Pages',
    year: '2026',
    summary:
      '用静态导出与自动发布，把分散的真实项目整理成一个公开、快速并且可以持续更新的入口。',
    role: '信息架构 / 前端实现 / 自动发布',
    theme: 'portfolio',
    links: [
      { label: '当前网站', href: 'https://haiqingm58-ui.github.io/personal-portfolio/' },
      { label: 'GitHub', href: 'https://github.com/haiqingm58-ui/personal-portfolio' },
    ],
  },
] as const;

const capabilities = [
  ['01', 'AI 产品工程', '把模型能力放进清晰的产品流程，兼顾交互、状态与可验证结果。'],
  ['02', '跨端前端', '使用 Flutter、React 与 Next.js 构建移动端和网页端体验。'],
  ['03', '知识系统', '以 FastAPI、RAG 与知识图谱组织专业资料、检索依据和智能问答。'],
  ['04', '交付与验证', '通过自动化测试、真机检查、持续集成与在线发布完成闭环。'],
] as const;

const skills = [
  'Flutter',
  'Dart',
  'Android',
  'React',
  'Next.js',
  'Vite',
  'FastAPI',
  'Python',
  'RAG',
  'Knowledge Graph',
  'GitHub Actions',
  '自动化测试',
];

const ArrowUpRight = () => (
  <span aria-hidden="true" className="arrow-icon">
    ↗
  </span>
);

function HumanTwinVisual() {
  const screens = [
    ['projects/humantwin-home.jpg', 'HumanTwin AI 首页，展示数字人体创建入口', 'HOME'],
    ['projects/humantwin-photo-selection.jpg', 'HumanTwin AI 三视图照片选择界面', 'CAPTURE'],
    ['projects/humantwin-viewer.jpg', 'HumanTwin AI 本地三维模型查看界面', 'VIEWER'],
  ];

  return (
    <div className="project-visual visual-humantwin">
      <div className="phone-gallery">
        {screens.map(([src, alt, label]) => (
          <figure className="phone-frame" key={src}>
            <img src={src} alt={alt} loading="lazy" decoding="async" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
      <span className="visual-note">ANDROID / RELEASE v0.1.0</span>
    </div>
  );
}

function FoundationVisual() {
  return (
    <div className="project-visual visual-foundation">
      <div className="browser-frame browser-frame-main">
        <div className="browser-bar" aria-hidden="true">
          <i /><i /><i /><span>智慧学伴 / RAG 智能问答</span>
        </div>
        <img
          src="projects/foundation-rag.jpg"
          alt="《基础工程》智慧学伴的 RAG 智能问答与检索依据界面"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="browser-frame browser-frame-secondary">
        <div className="browser-bar" aria-hidden="true">
          <i /><i /><i /><span>教师工作台</span>
        </div>
        <img
          src="projects/foundation-teacher.jpg"
          alt="《基础工程》智慧学伴教师工作台"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="visual-note">STUDENT / TEACHER / ADMIN</span>
    </div>
  );
}

function GeoRiskVisual() {
  return (
    <div className="project-visual visual-georisk">
      <div className="browser-frame georisk-browser">
        <div className="browser-bar" aria-hidden="true">
          <i /><i /><i /><span>georisklab.com.cn / 当前公开首页</span>
        </div>
        <img
          src="projects/georisk-home.jpg"
          alt="GeoRisk 地质灾害知识图谱当前公开首页，展示标准浏览、知识点检索与专题图谱构建入口"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span className="visual-note">CURRENT PUBLIC HOME / 2026.08</span>
    </div>
  );
}

function PortfolioVisual() {
  return (
    <div className="project-visual visual-portfolio">
      <div className="portfolio-window">
        <div className="browser-bar" aria-hidden="true">
          <i /><i /><i /><span>haiqingm58-ui.github.io/personal-portfolio</span>
        </div>
        <img src="og.png" alt="AI、工程与真实场景主题的个人作品集封面" loading="lazy" decoding="async" />
      </div>
      <div className="deploy-track" aria-label="自动发布流程">
        <span>CODE</span><i>→</i><span>BUILD</span><i>→</i><span>PAGES</span><b>LIVE</b>
      </div>
    </div>
  );
}

function ProjectVisual({ theme }: { theme: (typeof projects)[number]['theme'] }) {
  if (theme === 'humantwin') return <HumanTwinVisual />;
  if (theme === 'foundation') return <FoundationVisual />;
  if (theme === 'georisk') return <GeoRiskVisual />;
  return <PortfolioVisual />;
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '@haiqingm58-ui',
  url: 'https://haiqingm58-ui.github.io/personal-portfolio/',
  sameAs: ['https://github.com/haiqingm58-ui'],
  knowsAbout: ['AI 产品工程', 'Flutter', 'React', 'FastAPI', 'RAG', '知识图谱'],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#selected-work">跳到主要内容</a>

      <nav className="site-nav" aria-label="主导航">
        <a className="wordmark" href="#top" aria-label="返回首页">
          HQ<span className="wordmark-dot">.</span>
        </a>
        <div className="nav-menu">
          <a href="#selected-work">作品</a>
          <a href="#about">关于</a>
        </div>
        <div className="nav-meta">
          <span className="availability">
            <span className="status-dot" /> 持续构建中
          </span>
          <a
            className="nav-link"
            href="https://github.com/haiqingm58-ui"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight />
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>独立开发者 / AI 产品实践者</span>
          <span>2026 · 中国</span>
        </div>

        <div className="hero-heading-wrap">
          <p className="hero-index">01 — 作品集</p>
          <h1>
            AI × 工程，
            <span className="hero-line">
              做成<span className="accent-word">真实</span>产品。
            </span>
          </h1>
        </div>

        <div className="hero-footer">
          <p className="hero-intro">
            你好，我是<span>@haiqingm58-ui</span>。我把 AI、工程与真实场景连接起来，
            从产品构想到上线验证，持续完成可以运行、可以使用的数字产品。
          </p>
          <a className="primary-link" href="#selected-work">
            查看代表作品 <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="orbit-mark" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">思考<br />创造<br />验证</span>
        </div>
      </section>

      <section className="projects-section" id="selected-work" aria-labelledby="work-heading">
        <div className="section-label light-label">
          <span>精选项目 / Selected Work</span>
          <span>2026 — NOW</span>
        </div>
        <div className="projects-heading-row">
          <h2 id="work-heading">真实项目</h2>
          <p>四个公开项目，覆盖移动端数字人体、AI 教学、地质灾害知识系统与作品集工程。</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.number}>
              <ProjectVisual theme={project.theme} />
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-detail-row">
                <div className="project-role">
                  <span>我的角色</span>
                  <p>{project.role}</p>
                </div>
                <div className="project-links" aria-label={`${project.title} 项目链接`}>
                  {project.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${link.label}：${project.title}（新窗口打开）`}
                    >
                      {link.label} <ArrowUpRight />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-heading">
        <div className="section-label">
          <span>关于我 / About</span>
          <span>02</span>
        </div>

        <div className="about-grid">
          <h2 id="about-heading">
            把技术放进场景，
            <span>才算真正开始。</span>
          </h2>
          <div className="about-copy">
            <p>
              我以真实问题为起点，在移动端数字人体、AI 教学平台和地质灾害知识系统中，
              完成从产品结构、界面实现到后端能力的衔接。
            </p>
            <p>
              我重视能运行、能验证和能交付：不只展示概念，也保留源码、发布版本、
              自动化检查与线上入口，让每个项目都有可以继续生长的基础。
            </p>
          </div>
        </div>

        <div className="principles" aria-label="工作原则">
          <div><span>01</span><strong>能运行</strong><p>让想法进入真实流程</p></div>
          <div><span>02</span><strong>能验证</strong><p>用真机、页面与测试说话</p></div>
          <div><span>03</span><strong>能交付</strong><p>把结果发布并持续维护</p></div>
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-heading">
        <div className="section-label">
          <span>能力 / Capabilities</span>
          <span>03</span>
        </div>
        <div className="capabilities-layout">
          <h2 id="capabilities-heading">从想法到<br />公开产品。</h2>
          <div className="capability-list">
            {capabilities.map(([number, title, description]) => (
              <div className="capability-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-cloud" aria-label="技术关键词">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <p className="contact-kicker">项目、合作或技术交流</p>
        <h2 id="contact-heading">在 GitHub 见。</h2>
        <a
          className="contact-button"
          href="https://github.com/haiqingm58-ui"
          target="_blank"
          rel="noreferrer"
        >
          github.com/haiqingm58-ui <ArrowUpRight />
        </a>
        <div className="contact-orbit" aria-hidden="true"><i /><i /></div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">HQ<span>.</span></a>
        <p>© 2026 @haiqingm58-ui。项目持续更新中。</p>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </main>
  );
}
