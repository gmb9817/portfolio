const app = document.querySelector('#app');
const view = document.querySelector('#view');
const navLinks = Array.from(document.querySelectorAll('[data-route]'));

const projects = {
  aimath: {
    route: 'aimath',
    index: '01',
    category: 'Web · AI Education',
    title: 'AI Math',
    summary: 'AI와 머신러닝 학습에 필요한 수학 개념을 정리한 웹 기반 학습 사이트입니다.',
    tags: ['Web', 'AI Education', 'Math', 'GitHub Pages'],
    link: 'https://gmb9817.github.io/AImath/',
    side: [
      ['Type', 'Web-based learning material'],
      ['Role', '기획, 콘텐츠 구성, 웹 구현, 배포'],
      ['Output', 'GitHub Pages 공개 웹사이트']
    ],
    sections: [
      ['Problem', 'AI를 공부할 때 필요한 선형대수, 미적분, 확률 등의 수학 개념을 체계적으로 접근할 수 있는 학습 자료가 필요하다고 느꼈습니다.'],
      ['Approach', '학습 내용을 주제별로 정리하고, GitHub Pages를 통해 누구나 접근할 수 있는 정적 웹사이트 형태로 배포했습니다.'],
      ['My Role', '사이트 구조 설계, 학습 콘텐츠 구성, 웹페이지 구현 및 배포를 담당했습니다.'],
      ['Result', 'AI 수학 학습을 위한 공개 웹사이트로 제작했습니다.']
    ]
  },
  'jacobian-svd': {
    route: 'jacobian-svd',
    index: '02',
    category: 'AI Research · Linear Algebra',
    title: 'Jacobian-SVD 기반 AI 모델 분석 연구',
    summary: '자코비안과 특이값 분해를 활용해 AI 모델의 입력-출력 변화 구조와 역추적 가능성을 탐구한 프로젝트입니다.',
    tags: ['AI Research', 'Jacobian', 'SVD', 'Model Analysis'],
    side: [
      ['Type', 'Research project'],
      ['Methods', 'Jacobian, SVD, numerical experiment'],
      ['Focus', '입력-출력 변화 구조, 민감도 분석']
    ],
    sections: [
      ['Problem', 'AI 모델의 출력 변화가 입력 공간의 어떤 방향과 민감하게 연결되는지, 그 구조가 정보 역추적 가능성과 어떻게 연결되는지 분석하고자 했습니다.'],
      ['Approach', '모델의 국소적 변화 구조를 자코비안으로 표현하고, SVD를 통해 주요 변화 방향과 민감도를 분석했습니다.'],
      ['My Role', '연구 아이디어 구체화, 관련 수학 개념 조사, 실험 설계 및 결과 분석을 담당했습니다.'],
      ['Methods', 'Jacobian, Singular Value Decomposition, numerical experiment, model sensitivity analysis를 중심으로 실험을 구성했습니다.']
    ]
  },
  hydrogen: {
    route: 'hydrogen',
    index: '03',
    category: 'Optimization · Computational Geometry',
    title: '수소충전소 최적 입지 분석 R&E',
    summary: '보로노이 다이어그램과 그 변형을 활용해 수소충전소의 최적 배치 문제를 분석한 연구 프로젝트입니다.',
    tags: ['R&E', 'Voronoi Diagram', 'Optimization', 'Computational Geometry'],
    side: [
      ['Type', 'Research & Education'],
      ['Role', '모델링, 알고리즘 기반 분석, 결과 해석'],
      ['Achievement', '교육부 장관상 수상']
    ],
    sections: [
      ['Problem', '수소차 인프라 확대 상황에서 충전소를 어디에 배치해야 접근성과 효율성을 높일 수 있는지 분석하고자 했습니다.'],
      ['Approach', '보로노이 다이어그램과 변형된 공간 분할 기법을 이용해 후보 입지별 서비스 영역과 접근성을 분석했습니다.'],
      ['My Role', '수학적 모델링, 알고리즘 기반 분석, 결과 해석 및 발표 자료 구성에 참여했습니다.'],
      ['Result', 'R&E 활동 결과로 교육부 장관상을 수상했습니다.']
    ]
  }
};

const routeTitles = {
  overview: 'Overview',
  projects: 'Projects',
  'problem-setting': 'Problem Setting',
  honors: 'Awards & Honors'
};

const html = String.raw;

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function tagRow(tags) {
  return html`<div class="tag-row">${tags.map((tag) => `<span class="pill">${tag}</span>`).join('')}</div>`;
}

function renderOverview() {
  return html`
    <div class="hero">
      <section class="hero-main">
        <div>
          <p class="kicker">Student Portfolio</p>
          <h1>장우진</h1>
          <p class="lead">
            알고리즘과 AI 연구를 중심으로 문제를 분석하고, 직접 구현 가능한 형태로 정리하는 데 관심이 있습니다.
            연구 아이디어, 웹 기반 학습 자료, 프로그래밍 대회 문제 설계까지 문제 해결 과정 전반을 경험하고 있습니다.
          </p>
        </div>
        <div class="hero-actions">
          <a class="btn primary" href="#/projects">프로젝트 보기</a>
          <a class="btn" href="#/problem-setting">출제·검수 이력</a>
          <a class="btn" href="https://github.com/gmb9817" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <aside class="profile-card" aria-label="프로필 요약">
        <dl>
          <div>
            <dt>School</dt>
            <dd>대전대신고등학교</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Algorithms, AI Research, Web Development, Problem Setting</dd>
          </div>
          <div>
            <dt>Links</dt>
            <dd><a href="https://github.com/gmb9817" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://gmb9817.github.io/AImath/" target="_blank" rel="noreferrer">AI Math</a></dd>
          </div>
        </dl>
      </aside>
    </div>

    <section class="section-block" aria-label="대표 이력">
      <div class="stat-grid">
        <article class="stat-card">
          <span class="card-label">APIO</span>
          <strong>Official Participant</strong>
          <p>국내 13위, 아시아 109위 / 1,043명</p>
        </article>
        <article class="stat-card">
          <span class="card-label">Research</span>
          <strong>교육부 장관상</strong>
          <p>수소충전소 최적 입지 분석 R&amp;E</p>
        </article>
        <article class="stat-card">
          <span class="card-label">Olympiad</span>
          <strong>IOI 연습생 선발</strong>
          <p>한국정보올림피아드 다수 수상</p>
        </article>
        <article class="stat-card">
          <span class="card-label">Contest Work</span>
          <strong>출제 12문제 · 검수 13문제</strong>
          <p>프로그래밍 대회 문제 출제 및 검수</p>
        </article>
      </div>
    </section>

    <section class="section-block">
      <div class="section-title-row">
        <h2>관심 분야와 작업 방식</h2>
        <p>단순한 활동 목록이 아니라, 문제를 어떻게 정의하고 구현까지 연결했는지를 중심으로 정리했습니다.</p>
      </div>
      <div class="focus-grid">
        <article class="focus-card">
          <h3>Algorithmic Problem Solving</h3>
          <p>정보올림피아드와 알고리즘 대회를 통해 복잡한 문제를 구조화하고 효율적인 풀이를 설계하는 경험을 쌓았습니다.</p>
        </article>
        <article class="focus-card">
          <h3>Research-oriented Implementation</h3>
          <p>수학적 모델링, 선형대수, 계산기하 등을 활용해 연구 주제를 코드와 실험으로 연결하는 작업에 관심이 있습니다.</p>
        </article>
        <article class="focus-card">
          <h3>Problem Setting & Review</h3>
          <p>문제 출제와 검수 과정에서 정해 설계, 반례 검토, 데이터 검증, 난이도 조정을 경험했습니다.</p>
        </article>
      </div>
    </section>

    <section class="section-block">
      <div class="section-title-row">
        <h2>바로 보기</h2>
        <p>각 메뉴를 누르면 페이지 전체를 스크롤하지 않고 해당 화면으로 전환됩니다.</p>
      </div>
      <div class="preview-grid">
        <a class="panel-card" href="#/projects">
          <span class="card-label">Projects</span>
          <h3>연구와 개발 프로젝트</h3>
          <p>AI Math, Jacobian-SVD 기반 분석 연구, 수소충전소 최적 입지 분석 R&amp;E</p>
        </a>
        <a class="panel-card" href="#/honors">
          <span class="card-label">Awards</span>
          <h3>수상 및 선발 이력</h3>
          <p>APIO, IOI 연습생, KOI, KMO, 연구성과 발표대회 이력</p>
        </a>
      </div>
    </section>
  `;
}

function renderProjects() {
  const cards = Object.values(projects).map((project) => html`
    <a class="project-card" href="#/projects/${project.route}">
      <div>
        <span class="card-label">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
      </div>
      <div class="project-card-footer">
        ${tagRow(project.tags)}
        <span class="project-arrow" aria-hidden="true">→</span>
      </div>
    </a>
  `).join('');

  return html`
    <div class="page-head">
      <p class="kicker">Selected Work</p>
      <h2 class="page-title">Projects</h2>
      <p class="page-description">
        프로젝트를 카드로 분리했습니다. 프로젝트명을 누르면 같은 페이지 안에서 상세 화면으로 전환됩니다.
      </p>
    </div>
    <div class="project-grid">${cards}</div>
  `;
}

function renderProjectDetail(slug) {
  const project = projects[slug] || projects.aimath;
  const side = project.side.map(([label, value]) => html`
    <div>
      <dt>${label}</dt>
      <dd>${value}</dd>
    </div>
  `).join('');

  const sections = project.sections.map(([title, body]) => html`
    <section>
      <h2>${title}</h2>
      <p>${body}</p>
    </section>
  `).join('');

  const action = project.link
    ? html`<a class="inline-link" href="${escapeAttr(project.link)}" target="_blank" rel="noreferrer">프로젝트 바로가기</a>`
    : '';

  return html`
    <div class="detail-top">
      <a class="back-link" href="#/projects">← Projects</a>
    </div>
    <div class="page-head">
      <p class="kicker">${project.category}</p>
      <h2 class="page-title">${project.title}</h2>
      <p class="page-description">${project.summary}</p>
      <div class="filter-row">${project.tags.map((tag) => `<span class="pill">${tag}</span>`).join('')}</div>
    </div>
    <div class="detail-layout">
      <div class="prose">
        ${sections}
        ${action ? `<section><h2>Link</h2><p>${action}</p></section>` : ''}
      </div>
      <aside class="detail-side" aria-label="프로젝트 요약">
        <dl>${side}</dl>
      </aside>
    </div>
  `;
}

function renderProblemSetting() {
  const contests = [
    ['2025.03.22', 'DJMJ 포에버컵', '출제', '7문제 출제 · 백준 중학교 최초 프로그래밍 대회'],
    ['2025.07.27', '제2회 아니메컵', '출제 및 검수', '출제 1문제 · 검수 2문제'],
    ['2025.12.25', '제1회 코더즈 코딩페어', '출제', '4문제 출제'],
    ['2026.05.04', '명지대학교 프로그래밍 경진대회', '검수', '11문제 검수']
  ];

  return html`
    <div class="page-head">
      <p class="kicker">Contest Work</p>
      <h2 class="page-title">Problem Setting &amp; Review</h2>
      <p class="page-description">
        프로그래밍 대회의 문제 출제와 검수를 통해 정해 설계, 반례 검토, 데이터 검증, 난이도 조정 경험을 쌓았습니다.
      </p>
    </div>

    <div class="stat-grid">
      <article class="stat-card">
        <span class="card-label">Setting</span>
        <strong>12문제 출제</strong>
        <p>DJMJ 포에버컵, 아니메컵, 코더즈 코딩페어</p>
      </article>
      <article class="stat-card">
        <span class="card-label">Review</span>
        <strong>13문제 검수</strong>
        <p>아니메컵, 명지대학교 프로그래밍 경진대회</p>
      </article>
      <article class="stat-card">
        <span class="card-label">Scope</span>
        <strong>정해 · 반례 · 데이터</strong>
        <p>풀이 정당성, 시간 복잡도, 테스트 데이터 강도 검토</p>
      </article>
      <article class="stat-card">
        <span class="card-label">Format</span>
        <strong>Programming Contest</strong>
        <p>BOJ 기반 대회 출제 및 검수 경험</p>
      </article>
    </div>

    <section class="section-block">
      <div class="list-panel">
        ${contests.map(([date, name, role, body]) => html`
          <article class="list-item">
            <div class="list-date">${date}</div>
            <div class="list-body">
              <h3>${name}</h3>
              <p><span class="role-label">${role}</span> · ${body}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="section-block">
      <div class="section-title-row">
        <h2>출제와 검수에서 다룬 작업</h2>
        <p>좋은 문제를 만드는 과정에서 풀이 가능성, 난이도, 데이터 안정성을 함께 확인했습니다.</p>
      </div>
      <div class="focus-grid">
        <article class="focus-card">
          <h3>Problem Design</h3>
          <p>문제 아이디어를 알고리즘적 풀이로 연결하고, 참가자가 이해할 수 있는 지문 구조로 정리했습니다.</p>
        </article>
        <article class="focus-card">
          <h3>Solution Review</h3>
          <p>정해의 정당성, 시간 복잡도, 구현 난이도를 검토하고 다른 풀이 가능성을 확인했습니다.</p>
        </article>
        <article class="focus-card">
          <h3>Data Validation</h3>
          <p>예외 케이스와 반례 가능성을 점검하고, 테스트 데이터의 강도를 확인했습니다.</p>
        </article>
      </div>
    </section>
  `;
}

function renderHonors() {
  const timeline = [
    ['고등학교 2학년', [
      ['APIO Official Participant', '국내 13위, 아시아 109위 / 1,043명'],
      ['한성 노벨 영수재 장학생 선발', '장학생 선발']
    ]],
    ['고등학교 1학년', [
      ['한국정보올림피아드', '1차 동상, 2차 장려 수상'],
      ['국제정보올림피아드 연습생 선발', '정보올림피아드 기반 대표 선발 과정 참여'],
      ['한국수학올림피아드 오일러', '동상 수상'],
      ['국민대학교 알고리즘대회', '장려상 수상'],
      ['수소충전소 최적화 입지 분석 R&E', '교육부 장관상 수상']
    ]],
    ['중학교 3학년', [
      ['한국정보올림피아드', '1차 은상, 2차 동상 수상']
    ]],
    ['중학교 2학년', [
      ['과학영재교육원 사사과정 연구성과 발표대회', '입상'],
      ['한국과학기술원 총장상', '2위, 장우진 외 2명'],
      ['한국정보올림피아드', '1차 동상, 2차 장려 수상']
    ]]
  ];

  return html`
    <div class="page-head">
      <p class="kicker">Awards &amp; Honors</p>
      <h2 class="page-title">Awards &amp; Honors</h2>
      <p class="page-description">알고리즘, 연구, 수학 분야의 주요 수상 및 선발 이력을 정리했습니다.</p>
    </div>

    <div class="preview-grid">
      <article class="panel-card">
        <span class="card-label">2026</span>
        <h3>APIO Official Participant</h3>
        <p>국내 13위, 아시아 109위 / 1,043명</p>
      </article>
      <article class="panel-card">
        <span class="card-label">2025</span>
        <h3>국제정보올림피아드 연습생 선발</h3>
        <p>정보올림피아드 기반 대표 선발 과정 참여</p>
      </article>
      <article class="panel-card">
        <span class="card-label">Research</span>
        <h3>교육부 장관상</h3>
        <p>수소충전소 최적화 입지 분석 R&amp;E</p>
      </article>
      <article class="panel-card">
        <span class="card-label">Olympiad</span>
        <h3>한국정보올림피아드 다수 수상</h3>
        <p>중학교 2학년부터 고등학교 1학년까지 지속적인 수상 이력</p>
      </article>
    </div>

    <section class="section-block timeline">
      ${timeline.map(([year, items]) => html`
        <div class="timeline-group">
          <div class="timeline-year">${year}</div>
          <div class="timeline-items">
            ${items.map(([title, body]) => html`
              <article class="timeline-card">
                <strong>${title}</strong>
                <span>${body}</span>
              </article>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </section>
  `;
}

function parseRoute() {
  const cleaned = window.location.hash.replace(/^#\/?/, '').trim();
  const parts = cleaned.split('/').filter(Boolean);
  if (!parts.length) return { page: 'overview' };
  if (parts[0] === 'projects' && parts[1]) return { page: 'project-detail', slug: parts[1] };
  if (['overview', 'projects', 'problem-setting', 'honors'].includes(parts[0])) return { page: parts[0] };
  return { page: 'overview' };
}

function setActiveNav(page) {
  const active = page === 'project-detail' ? 'projects' : page;
  navLinks.forEach((link) => {
    const isActive = link.dataset.route === active;
    link.classList.toggle('is-active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function render() {
  const route = parseRoute();
  let markup = '';
  let title = '';

  if (route.page === 'overview') {
    markup = renderOverview();
    title = routeTitles.overview;
  } else if (route.page === 'projects') {
    markup = renderProjects();
    title = routeTitles.projects;
  } else if (route.page === 'project-detail') {
    markup = renderProjectDetail(route.slug);
    title = projects[route.slug]?.title || routeTitles.projects;
  } else if (route.page === 'problem-setting') {
    markup = renderProblemSetting();
    title = routeTitles['problem-setting'];
  } else if (route.page === 'honors') {
    markup = renderHonors();
    title = routeTitles.honors;
  }

  view.innerHTML = markup;
  setActiveNav(route.page);
  document.title = `장우진 Portfolio · ${title}`;
  app?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

window.addEventListener('hashchange', render);

if (!window.location.hash) {
  window.location.hash = '#/overview';
}
render();
