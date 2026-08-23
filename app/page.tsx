const projects = [
  {
    number: '01',
    title: '智能知识工作台',
    type: 'AI 产品 · 体验设计',
    year: '2026',
    summary:
      '把分散的信息与复杂的任务流程，重组为清晰、顺畅的一体化工作体验。',
    role: '产品策略 / 信息架构 / 原型验证',
    theme: 'knowledge',
  },
  {
    number: '02',
    title: '数字孪生交互体验',
    type: '三维体验 · 移动端',
    year: '2025',
    summary:
      '融合三维可视化、实时数据与移动交互，让专业信息变得直观且易于理解。',
    role: '体验策略 / 交互设计 / 前端验证',
    theme: 'twin',
  },
  {
    number: '03',
    title: '数据洞察与决策平台',
    type: '数据产品 · 可视化',
    year: '2024',
    summary:
      '将分散指标组织成清晰的决策路径，帮助团队更快识别风险与比较方案。',
    role: '用户研究 / 设计系统 / 数据叙事',
    theme: 'data',
  },
];

const capabilities = [
  ['01', '产品策略', '把目标、用户需求与约束条件整理成清晰的产品方向。'],
  ['02', '体验设计', '从信息架构到高保真原型，建立自然、连贯的使用体验。'],
  ['03', '设计系统', '用可复用的规则与组件，让产品在迭代中保持一致。'],
  ['04', '原型实现', '用前端与 AI 工具快速验证关键想法，缩短从概念到反馈的距离。'],
];

const ArrowUpRight = () => (
  <span aria-hidden="true" className="arrow-icon">
    ↗
  </span>
);

function ProjectVisual({ theme, title }: { theme: string; title: string }) {
  return (
    <div className={`project-visual visual-${theme}`} role="img" aria-label={`${title} 项目视觉预览`}>
      {theme === 'knowledge' && (
        <div className="knowledge-ui" aria-hidden="true">
          <div className="mock-sidebar">
            <span className="mock-logo">K</span>
            <i /><i /><i /><i />
          </div>
          <div className="mock-content">
            <div className="mock-top"><i /><i /></div>
            <p>让知识流动起来</p>
            <div className="mock-grid">
              <span /><span /><span />
            </div>
          </div>
          <div className="floating-note">AI / 01</div>
        </div>
      )}
      {theme === 'twin' && (
        <div className="twin-art" aria-hidden="true">
          <span className="twin-ring ring-a" />
          <span className="twin-ring ring-b" />
          <span className="twin-ring ring-c" />
          <span className="twin-sphere">3D</span>
          <span className="coordinate coordinate-a">34.26° N</span>
          <span className="coordinate coordinate-b">108.94° E</span>
        </div>
      )}
      {theme === 'data' && (
        <div className="data-art" aria-hidden="true">
          <div className="data-topline"><span>RISK INDEX</span><b>72.4</b></div>
          <div className="data-bars">
            {[42, 68, 51, 84, 64, 92, 74].map((height, index) => (
              <i key={height} style={{ height: `${height}%` }}><span>{index + 1}</span></i>
            ))}
          </div>
          <div className="data-caption">INSIGHT — DECISION — ACTION</div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#selected-work">跳到主要内容</a>

      <nav className="site-nav" aria-label="主导航">
        <a className="wordmark" href="#top" aria-label="返回首页">
          YN<span className="wordmark-dot">.</span>
        </a>
        <div className="nav-menu">
          <a href="#selected-work">作品</a>
          <a href="#about">关于</a>
        </div>
        <div className="nav-meta">
          <span className="availability">
            <span className="status-dot" /> 可接受新项目
          </span>
          <a className="nav-link" href="mailto:hello@example.com">
            联系我 <ArrowUpRight />
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span>独立创作者 / 产品设计师</span>
          <span>2026 · 中国</span>
        </div>

        <div className="hero-heading-wrap">
          <p className="hero-index">01 — 作品集</p>
          <h1>
            把复杂问题，
            <span className="hero-line">
              设计成<span className="accent-word">清晰</span>体验。
            </span>
          </h1>
        </div>

        <div className="hero-footer">
          <p className="hero-intro">
            你好，我是<span>你的名字</span>。我工作在设计与技术的交叉地带，从洞察、
            原型到落地，打造兼具体验品质与工程可行性的数字产品。
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
          <span>2024 — 2026</span>
        </div>
        <div className="projects-heading-row">
          <h2 id="work-heading">代表作品</h2>
          <p>三个项目，展示我如何把复杂信息转化为清晰、可用、可以真正落地的产品。</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card-${index + 1}`} key={project.number}>
              <ProjectVisual theme={project.theme} title={project.title} />
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-role">
                <span>我的角色</span>
                <p>{project.role}</p>
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
            好的设计不是装饰，
            <span>而是让事情变得更容易。</span>
          </h2>
          <div className="about-copy">
            <p>
              我是一名工作在设计与技术交叉地带的创作者，擅长梳理复杂需求、建立清晰结构，
              并将想法转化为可验证、可持续迭代的产品。
            </p>
            <p>
              我关注用户体验、视觉系统与工程实现之间的完整闭环，也相信真正优秀的产品，
              应该同时经得起用户、业务与时间的检验。
            </p>
          </div>
        </div>

        <div className="principles" aria-label="工作原则">
          <div><span>01</span><strong>看清问题</strong><p>先理解，再创造</p></div>
          <div><span>02</span><strong>建立秩序</strong><p>让复杂变得清晰</p></div>
          <div><span>03</span><strong>快速验证</strong><p>用真实反馈前进</p></div>
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-heading">
        <div className="section-label">
          <span>能力 / Capabilities</span>
          <span>03</span>
        </div>
        <div className="capabilities-layout">
          <h2 id="capabilities-heading">从想法到<br />可用产品。</h2>
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
        <div className="skill-cloud" aria-label="技能关键词">
          {['产品策略', '用户研究', '信息架构', '交互设计', '视觉设计', '设计系统', '前端开发', 'AI 原型', '数据可视化'].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <p className="contact-kicker">有一个值得认真做好的想法？</p>
        <h2 id="contact-heading">我们聊聊。</h2>
        <a className="contact-button" href="mailto:hello@example.com">
          hello@example.com <ArrowUpRight />
        </a>
        <div className="contact-orbit" aria-hidden="true"><i /><i /></div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">YN<span>.</span></a>
        <p>© 2026 你的名字。保留所有权利。</p>
        <a href="#top">返回顶部 ↑</a>
      </footer>
    </main>
  );
}
