const app = document.querySelector('#app');
const view = document.querySelector('#view');
const navLinks = Array.from(document.querySelectorAll('[data-route]'));
const navToggle = document.querySelector('.nav-toggle');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxTitle = document.querySelector('#lightbox-title');
const lightboxCaption = document.querySelector('#lightbox-caption');

const html = String.raw;

const ROUTES = {
  home: 'Home',
  work: 'Work',
  ai: 'AI',
  foundations: 'Foundations',
  setting: 'Problem Setting',
  honors: 'Honors'
};

const PROJECTS = [
  {
    slug: 'llm-robustness',
    number: '01',
    category: 'AI & Research',
    title: 'LLM Robustness Evaluation',
    tagline: 'Spectral-Gradient Hybrid Optimization',
    summary: 'Jacobian SVD와 GCG를 결합해 LLM 프롬프트 최적화의 안정성과 탈출 능력을 분석한 연구입니다. 포트폴리오에서는 AI 안전성·강건성 평가 프로젝트로 정리했습니다.',
    proof: 'AI를 수학적 도구와 실험으로 분석한 핵심 연구',
    role: '연구 설계, 구현, 실험 비교, 결과 분석',
    period: '2025.12',
    tags: ['AI Safety', 'LLM', 'Jacobian', 'SVD', 'GCG', 'Optimization'],
    links: [['Research PDF', './assets/research/llm-robustness.pdf']],
    results: [
      ['0.56±0.34', 'Hybrid 평균 손실'],
      ['100%', '5개 타겟 기준 성공률'],
      ['64.4%', 'GCG 대비 손실 개선']
    ],
    details: [
      ['문제의식', 'LLM의 안전성과 강건성을 평가하려면, 모델이 특정 목표 출력으로 유도되는 과정에서 어떤 최적화 방법이 안정적인지 비교할 필요가 있습니다. 이 연구는 GCG의 안정성과 SVD 기반 스펙트럼 방향의 탈출 능력을 함께 분석했습니다.'],
      ['접근 방법', '평상시에는 Greedy Coordinate Gradient를 사용하고, 손실 개선이 정체되는 구간에서는 자코비안 SVD로 얻은 방향을 이용해 더 큰 탐색을 수행하는 하이브리드 전환 메커니즘을 설계했습니다.'],
      ['실험 결과', 'Llama-3.2-1B 모델과 5개의 synthetic target prompt를 기준으로 비교했을 때, Hybrid 방법은 평균 손실 0.56±0.34, 100% 성공률, GCG 대비 64.4% 손실 개선을 보였습니다.'],
      ['의미', 'SVD를 단독 최적화 방법으로 쓰기보다, GCG가 local minimum에 갇혔을 때 탈출용으로 사용하는 것이 더 안정적이라는 결론을 얻었습니다. 포트폴리오에서는 “AI를 수학적으로 이해하고 실험으로 검증한 사례”로 배치했습니다.']
    ]
  },
  {
    slug: 'ai-math',
    number: '02',
    category: 'AI & Research',
    title: 'AI Math',
    tagline: 'AI 학습을 위한 수학·모델 실습 웹사이트',
    summary: '퍼셉트론, 텍스트 데이터, 숫자 인식, 해밍 거리, 합성곱 필터, 풀링, CNN 파이프라인, 객체 탐지 등 AI 입문 개념을 웹 기반 자료로 정리한 프로젝트입니다.',
    proof: 'AI 기초 개념을 설명 가능한 자료로 구조화',
    role: '기획, 콘텐츠 구성, 웹 구현, GitHub Pages 배포',
    period: '2026',
    tags: ['JavaScript', 'HTML', 'AI Education', 'MNIST', 'CNN', 'GitHub Pages'],
    links: [
      ['Demo', 'https://gmb9817.github.io/AImath/'],
      ['GitHub', 'https://github.com/gmb9817/AImath']
    ],
    details: [
      ['목적', 'AI를 처음 공부할 때 필요한 수학 개념과 모델 구조가 흩어져 있어, 직접 정리하고 실습 가능한 웹페이지로 만들었습니다. 단순 요약이 아니라 사용자가 직접 보고 조작하며 이해할 수 있는 구성을 목표로 했습니다.'],
      ['구성', '퍼셉트론, 텍스트 데이터, 숫자 인식, 해밍 거리, Quick Draw, 합성곱 필터 실습, 풀링과 정규화, CNN 파이프라인, 객체 탐지 등을 다루도록 구성했습니다.'],
      ['의미', 'AI를 사용하는 경험뿐 아니라 AI의 기초 개념을 설명하고 재구성하는 능력을 보여줍니다. LLM Robustness 프로젝트와 함께 “수학 기반 AI” 흐름을 만드는 역할을 합니다.']
    ]
  },
  {
    slug: 'techcone-ai-hackathon',
    number: '03',
    category: 'AI & Research',
    title: '과학관-지역연계 AI 해커톤',
    tagline: 'AI로 과학문화와 지역을 잇는 아이디어 발굴',
    summary: '국립중앙과학관 주최 TechConE 행사 중 2025 과학관-지역연계 AI 해커톤에 참여해, AI를 실제 지역·과학문화 맥락에 적용하는 아이디어를 다룬 활동입니다.',
    proof: 'AI를 실제 문제와 연결해본 활동 경험',
    role: '팀 기반 아이디어 구체화 및 문제 정의',
    period: '2025.09.12',
    tags: ['AI Hackathon', 'Idea Design', 'Science Culture', 'Team Project'],
    image: './assets/certificate-ai-hackathon.jpg',
    imageTitle: '2025 과학관-지역연계 AI 해커톤',
    links: [],
    details: [
      ['활동 주제', 'AI를 활용해 과학문화와 지역을 연결하는 아이디어를 발굴하는 해커톤에 참여했습니다. 모델 성능만 보는 활동이 아니라, 사용자와 지역, 과학문화라는 맥락을 함께 고려한 경험입니다.'],
      ['의미', 'AI 연구와 수학적 분석 중심의 프로젝트에 더해, AI를 실제 문제 해결과 서비스 기획 관점으로 연결한 활동으로 정리했습니다.']
    ]
  },
  {
    slug: 'matlang',
    number: '04',
    category: 'Systems & Foundations',
    title: 'Matlang',
    tagline: 'Rust 기반 MATLAB-compatible language system',
    summary: 'MATLAB-compatible 언어 시스템을 목표로 하는 컴파일러·런타임 프로젝트입니다. 파서, 의미 분석, HIR, 최적화, 코드 생성, 바이트코드 실행 등 언어 시스템의 흐름을 다룹니다.',
    proof: '컴파일러와 런타임 구조를 직접 다루는 CS 기초 구현력',
    role: '언어 시스템 구조 설계 및 구현 경험 정리',
    period: 'GitHub project',
    tags: ['Rust', 'Compiler', 'Parser', 'Runtime', 'Bytecode'],
    links: [['GitHub', 'https://github.com/gmb9817/Matlang']],
    details: [
      ['구현 범위', '문법 파싱에서 의미 분석, HIR, 최적화, 코드 생성, 직렬화된 바이트코드 아티팩트와 번들, 인터프리터와 바이트코드 실행으로 이어지는 구조를 다룹니다.'],
      ['기초 역량', 'AI 프로젝트와 별개로 컴파일러, 런타임, 타입·값 모델 같은 낮은 레벨의 구현 경험을 보여줍니다. 포트폴리오에서 “기초가 탄탄하다”는 인상을 가장 강하게 만드는 프로젝트입니다.'],
      ['연결성', '수학 계산 언어를 다루는 프로젝트이기 때문에 장기적으로 수치 계산, 모델 실험, AI 도구 구현과도 연결될 수 있습니다.']
    ]
  },
  {
    slug: 'dbcord',
    number: '05',
    category: 'Systems & Foundations',
    title: 'dbcord',
    tagline: 'Discord-native database experiment',
    summary: 'Discord의 서버, 카테고리, 채널, 메시지, 첨부파일 구조를 데이터베이스 구성 요소처럼 해석한 실험적 데이터베이스 프로젝트입니다.',
    proof: '외부 플랫폼을 데이터 저장 구조로 재해석',
    role: '스키마·인덱스·CRUD·검증 흐름 설계',
    period: 'GitHub project',
    tags: ['Python', 'Database', 'Discord API', 'Schema', 'Testing'],
    links: [['GitHub', 'https://github.com/gmb9817/dbcord']],
    details: [
      ['핵심 아이디어', 'Guild를 database instance, category를 namespace, text channel을 table 또는 secondary index, message를 row 또는 index entry, attachment를 blob 또는 snapshot으로 해석했습니다.'],
      ['구현 범위', 'init, CRUD, find, inspect, export, verify, reindex, vacuum, snapshot 같은 명령 흐름과 스키마 검증, 첨부파일 기반 blob row, 테스트 구조를 다룹니다.'],
      ['의미', '완성된 상용 데이터베이스가 아니라 실험 프로젝트라는 점을 분명히 하되, 시스템을 추상화하고 제약이 있는 플랫폼 위에서 데이터 구조를 설계한 경험을 보여줍니다.']
    ]
  },
  {
    slug: 'starscript',
    number: '06',
    category: 'Systems & Foundations',
    title: 'starscript',
    tagline: '직접 설계한 프로그래밍 언어 실험',
    summary: '변수, 함수, 조건문, 반복문, 사용자 정의 타입, 모듈, always block 등을 포함한 프로그래밍 언어 실험입니다.',
    proof: '문법, 타입, 스코프, 실행 모델을 직접 고민한 프로젝트',
    role: '언어 문법 설계 및 인터프리터 구현 실험',
    period: 'GitHub project',
    tags: ['Python', 'Programming Language', 'Interpreter', 'Syntax'],
    links: [['GitHub', 'https://github.com/gmb9817/star']],
    details: [
      ['구현 범위', '정수, 실수, 문자열, 불리언, 리스트 같은 기본 타입과 함수 선언, if/elif/else, while, break/continue, 사용자 정의 타입, 모듈 사용 등을 다룹니다.'],
      ['확장 요소', 'always block처럼 일정 간격으로 실행되는 구조를 포함해 단순 계산기 수준을 넘어 언어 설계 실험을 확장했습니다.'],
      ['의미', '프로그래밍 언어를 직접 만드는 경험은 파싱, 스코프, 타입, 실행 모델의 기초를 보여줍니다. Matlang과 함께 시스템 구현 역량을 보강합니다.']
    ]
  },
  {
    slug: 'hydrogen',
    number: '07',
    category: 'Modeling & Optimization',
    title: '수소충전소 최적 입지 분석 R&E',
    tagline: '보로노이 다이어그램 기반 공간 최적화 연구',
    summary: '보로노이 다이어그램과 변형 기법을 활용해 수소충전소의 최적 배치 문제를 분석한 R&E 프로젝트입니다. 2025년 융합형 연구과제 성과발표회에서 최우수상, 교육부장관상을 수상했습니다.',
    proof: '계산기하와 최적화를 실제 인프라 문제에 적용',
    role: '공간 모델링, 알고리즘 구현, 분석 및 발표 자료 구성',
    period: '2025',
    tags: ['R&E', 'Voronoi Diagram', 'Optimization', 'Computational Geometry'],
    image: './assets/certificate-steam-ministry.jpg',
    imageTitle: '2025 융합형 연구과제 성과발표회 최우수상',
    links: [],
    details: [
      ['문제의식', '수소차 인프라 확대 상황에서 충전소를 어디에 배치해야 접근성과 효율성을 높일 수 있는지 분석하고자 했습니다.'],
      ['접근 방법', '보로노이 다이어그램과 변형된 공간 분할 기법을 활용해 후보 입지별 서비스 영역과 접근성을 분석했습니다.'],
      ['성과', '2025년 융합형 연구과제 성과발표회에서 우수 과제로 입상해 최우수상, 교육부장관상을 수상했습니다.'],
      ['포트폴리오에서의 의미', 'AI만 강조하면 기초가 약해 보일 수 있기 때문에, 계산기하와 최적화 기반의 연구 경험으로 수학적 모델링 역량을 함께 보여줍니다.']
    ]
  },
  {
    slug: 'friction-simulation',
    number: '08',
    category: 'Modeling & Optimization',
    title: '마찰보상 체험 웹',
    tagline: '정지마찰과 운동마찰 차이를 시뮬레이션하는 웹 프로젝트',
    summary: '마찰보상 적용 전후의 위치 오차를 비교할 수 있는 교육용 시뮬레이션 웹 프로젝트입니다. 목표 각도, 제어 강도, 마찰 계수 등을 조절하고 실시간 그래프로 비교합니다.',
    proof: '물리 개념을 코드와 시각화로 구현',
    role: '시뮬레이션 로직, UI, 그래프 구현',
    period: 'GitHub project',
    tags: ['JavaScript', 'Simulation', 'Physics', 'Graph'],
    links: [['GitHub', 'https://github.com/gmb9817/science_day']],
    details: [
      ['핵심 아이디어', '정지마찰과 운동마찰의 차이를 조절하고, 마찰보상 ON/OFF에 따른 목표 위치, 실제 위치, 오차를 비교할 수 있도록 구성했습니다.'],
      ['구현 요소', '목표 각도, 제어 강도, 정지마찰, 운동마찰, 기초/비교/심화 모드, 실시간 그래프, 속도·위치 의존 마찰 옵션 등을 다루었습니다.'],
      ['의미', '물리 개념을 수식과 시뮬레이션으로 옮긴 프로젝트입니다. 기초 개념을 코드로 구현하고 설명하는 능력을 보여줍니다.']
    ]
  },
  {
    slug: 'cp-template',
    number: '09',
    category: 'Algorithmic Foundation',
    title: 'Competitive Programming Template',
    tagline: '알고리즘 대회용 템플릿과 풀이 인프라 정리',
    summary: '대회 환경에서 반복적으로 사용하는 템플릿과 코드 조각을 정리한 저장소입니다. 수상 이력을 뒷받침하는 꾸준한 문제 해결 기반을 보여주는 보조 프로젝트입니다.',
    proof: '알고리즘 훈련을 도구화한 기반 프로젝트',
    role: '템플릿 정리 및 대회 환경 구성',
    period: 'GitHub project',
    tags: ['Competitive Programming', 'Template', 'Algorithms', 'BOJ'],
    links: [['GitHub', 'https://github.com/gmb9817/cp_template']],
    details: [
      ['목적', '대회에서 반복적으로 필요한 기본 구조와 코드 조각을 정리해 문제 풀이 속도와 안정성을 높이기 위한 프로젝트입니다.'],
      ['의미', '알고리즘 대회 경험이 단발성 수상이 아니라 꾸준한 훈련과 도구화로 이어졌다는 점을 보여줍니다.'],
      ['연결성', 'APIO, KOI, solved.ac 프로필, 출제·검수 경험과 함께 알고리즘 기반을 보여주는 보조 프로젝트로 배치했습니다.']
    ]
  }
];

const EVIDENCE = [
  {
    id: 'steam',
    title: '교육부장관상 · 융합형 연구과제 성과발표회',
    caption: '수소충전소 최적 입지 분석 R&E 성과 증빙입니다.',
    image: './assets/certificate-steam-ministry.jpg',
    alt: '2025 융합형 연구과제 성과발표회 최우수상 교육부장관상'
  },
  {
    id: 'ai-hackathon',
    title: '과학관-지역연계 AI 해커톤',
    caption: 'AI를 과학문화와 지역 문제에 적용한 활동 증빙입니다.',
    image: './assets/certificate-ai-hackathon.jpg',
    alt: '2025 과학관-지역연계 AI 해커톤 참가 증명서'
  },
  {
    id: 'kaist',
    title: 'KAIST 총장상 · 연구성과 발표',
    caption: '과학영재교육원 사사과정 연구성과 발표대회 우수상 증빙입니다.',
    image: './assets/certificate-kaist-research.jpg',
    alt: 'KAIST 총장상 연구성과 발표대회 증빙'
  },
  {
    id: 'koi-2025',
    title: '한국정보올림피아드 2025',
    caption: '고등부 1차 동상 및 2차 장려상 관련 증빙 일부입니다.',
    image: './assets/certificate-koi-2025-crop.jpg',
    alt: '한국정보올림피아드 2025 수상 증빙 일부'
  },
  {
    id: 'koi-2024',
    title: '한국정보올림피아드 2024',
    caption: '중등부 1차 은상 및 2차 동상 관련 증빙 일부입니다.',
    image: './assets/certificate-koi-2024-crop.jpg',
    alt: '한국정보올림피아드 2024 수상 증빙 일부'
  },
  {
    id: 'koi-2023',
    title: '한국정보올림피아드 2023',
    caption: '중등부 1차 동상 및 2차 장려상 관련 증빙 일부입니다.',
    image: './assets/certificate-koi-2023-crop.jpg',
    alt: '한국정보올림피아드 2023 수상 증빙 일부'
  },
  {
    id: 'security',
    title: '건양대학교 정보보호영재교육원',
    caption: '중등심화 과정 수료 및 우수상 증빙입니다.',
    image: './assets/certificate-security-gifted.jpg',
    alt: '건양대학교 정보보호영재교육원 수료 및 우수상 증빙'
  },
  {
    id: 'hansung',
    title: '한성 노벨 영·수재 장학생',
    caption: '제13기 장학생 선발 증빙입니다.',
    image: './assets/certificate-hansung-scholarship.jpg',
    alt: '한성 노벨 영수재 장학증서'
  }
];

const PROJECT_MAP = Object.fromEntries(PROJECTS.map((project) => [project.slug, project]));
let selectedGroup = 'All';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function tagRow(tags = []) {
  return html`<div class="tag-row">${tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join('')}</div>`;
}

function linkList(links = []) {
  if (!links.length) return '';
  return html`<div class="link-list">${links.map(([label, url], index) => `<a class="inline-link ${index === 0 && label.includes('PDF') ? 'primary' : ''}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join('')}</div>`;
}

function renderProjectRow(project) {
  return html`
    <a class="project-row" href="#/work/${escapeHtml(project.slug)}">
      <span class="project-no">${escapeHtml(project.number)}</span>
      <div>
        <div class="project-meta">
          <strong class="project-title">${escapeHtml(project.title)}</strong>
          <span class="project-category">${escapeHtml(project.category)}</span>
        </div>
        <p class="project-summary">${escapeHtml(project.summary)}</p>
        ${tagRow(project.tags)}
      </div>
      <div class="project-proof"><span>What it shows</span>${escapeHtml(project.proof)}</div>
      <span class="project-arrow" aria-hidden="true">→</span>
    </a>
  `;
}

function renderEvidenceCard(item) {
  return html`
    <button class="evidence-card" type="button" data-lightbox="${escapeHtml(item.image)}" data-title="${escapeHtml(item.title)}" data-caption="${escapeHtml(item.caption)}" data-alt="${escapeHtml(item.alt)}">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.alt)}" loading="lazy" />
      <div class="evidence-body">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.caption)}</p>
      </div>
    </button>
  `;
}

function detailBlock(title, body) {
  return html`
    <section class="detail-panel">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
    </section>
  `;
}

function resultBoxes(project) {
  if (!project.results) return '';
  return html`<div class="result-grid">${project.results.map(([value, label]) => `<div class="result-box"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join('')}</div>`;
}

function renderHome() {
  const featured = ['llm-robustness', 'matlang', 'hydrogen', 'ai-math'].map((slug) => renderProjectRow(PROJECT_MAP[slug])).join('');
  return html`
    <div class="hero">
      <section class="hero-main">
        <div>
          <p class="kicker">Student Portfolio</p>
          <h1 class="hero-title"><span class="latin">Jang Woojin</span>장우진</h1>
          <p class="hero-lead">
            알고리즘을 기반으로 AI 모델 분석, 시스템 구현, 수학적 모델링을 이어가고 있습니다.
            이 포트폴리오는 수상 목록만 나열하기보다, 직접 만든 것과 분석한 것, 그리고 문제를 설계하고 검증한 경험을 중심으로 구성했습니다.
          </p>
        </div>
        <div class="hero-actions">
          <a class="btn primary" href="#/work">Selected Work</a>
          <a class="btn" href="#/ai">AI Focus</a>
          <a class="btn" href="#/honors">Honors</a>
          <a class="btn" href="https://github.com/gmb9817" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <aside class="hero-aside" aria-label="프로필 요약">
        <dl class="profile-list">
          <div>
            <dt>School</dt>
            <dd>대전대신고등학교</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Algorithms · AI Research · Systems · Mathematical Modeling</dd>
          </div>
          <div>
            <dt>Profiles</dt>
            <dd><a class="text-link" href="https://github.com/gmb9817" target="_blank" rel="noreferrer">GitHub</a> · <a class="text-link" href="https://solved.ac/profile/gmb9817" target="_blank" rel="noreferrer">solved.ac</a></dd>
          </div>
          <div>
            <dt>Direction</dt>
            <dd>AI를 수학적으로 이해하고, 기초 구현력으로 뒷받침하는 방향</dd>
          </div>
        </dl>
        <div class="status-card">
          <strong>Current emphasis</strong>
          <p>LLM 강건성 평가 연구를 AI 파트의 중심에 두고, 컴파일러·언어·데이터베이스 실험으로 기초 구현력을 보강했습니다.</p>
        </div>
      </aside>
    </div>

    <section class="section">
      <div class="metrics">
        <article class="metric-card"><span class="label">Algorithms</span><strong>APIO Official Participant</strong><p>국내 13위, 아시아 109위 / 1,043명</p></article>
        <article class="metric-card"><span class="label">AI Research</span><strong>LLM Robustness</strong><p>Jacobian SVD와 GCG를 결합한 강건성 평가 연구</p></article>
        <article class="metric-card"><span class="label">Research</span><strong>교육부장관상</strong><p>수소충전소 최적 입지 분석 R&amp;E</p></article>
        <article class="metric-card"><span class="label">Contest Work</span><strong>출제 12문제 · 검수 13문제</strong><p>프로그래밍 대회 문제 출제 및 검수</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>대표 작업</h2>
        <p>AI, 시스템 구현, 수학적 모델링을 가장 잘 보여주는 작업만 먼저 노출했습니다.</p>
      </div>
      <div class="project-list">${featured}</div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>읽히는 방식</h2>
        <p>공식 제출용 포트폴리오에서 중요한 것은 항목 수보다, 각 활동이 어떤 역량을 증명하는지입니다.</p>
      </div>
      <div class="route-grid">
        <a class="route-card" href="#/ai"><span class="label">01</span><h3>AI를 수학적으로 이해</h3><p>LLM Robustness, Jacobian-SVD, AI Math를 통해 AI 관심사를 연구와 구현 중심으로 정리했습니다.</p></a>
        <a class="route-card" href="#/foundations"><span class="label">02</span><h3>기초 구현력 강조</h3><p>컴파일러, 프로그래밍 언어, 데이터베이스 실험, 알고리즘 템플릿으로 기반을 보강했습니다.</p></a>
        <a class="route-card" href="#/setting"><span class="label">03</span><h3>문제 설계와 검증</h3><p>출제·검수 경험을 별도 페이지로 두어 알고리즘을 푸는 것 이상의 경험을 보여줍니다.</p></a>
      </div>
    </section>
  `;
}

function renderWork() {
  const groups = ['All', ...Array.from(new Set(PROJECTS.map((project) => project.category)))];
  const visible = selectedGroup === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === selectedGroup);
  return html`
    <div class="page-head">
      <p class="kicker">Selected Work</p>
      <h2 class="page-title">Work</h2>
      <p class="page-description">
        프로젝트를 성격별로 나누어 정리했습니다. 이름만 나열하지 않고, 각 프로젝트가 어떤 역량을 보여주는지 함께 보이도록 구성했습니다.
      </p>
      <div class="subnav" role="tablist" aria-label="프로젝트 필터">
        ${groups.map((group) => `<button type="button" data-filter="${escapeHtml(group)}" class="${group === selectedGroup ? 'is-selected' : ''}">${escapeHtml(group)}</button>`).join('')}
      </div>
    </div>
    <div class="project-list">${visible.map(renderProjectRow).join('')}</div>
  `;
}

function renderProjectDetail(slug) {
  const project = PROJECT_MAP[slug] || PROJECTS[0];
  const evidence = project.image ? html`
    <button class="evidence-mini" type="button" data-lightbox="${escapeHtml(project.image)}" data-title="${escapeHtml(project.imageTitle || project.title)}" data-caption="관련 증빙 이미지를 확인할 수 있습니다." data-alt="${escapeHtml(project.imageTitle || project.title)}">
      <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageTitle || project.title)}" loading="lazy" />
      <div><strong>Evidence</strong><span>관련 증빙 이미지 보기</span></div>
    </button>
  ` : '';
  return html`
    <div class="detail-top"><a class="back-link" href="#/work">← Work</a></div>
    <div class="page-head">
      <p class="kicker">${escapeHtml(project.category)}</p>
      <h2 class="page-title">${escapeHtml(project.title)}</h2>
      <p class="page-description">${escapeHtml(project.tagline)}<br>${escapeHtml(project.summary)}</p>
      ${tagRow(project.tags)}
      ${linkList(project.links)}
      ${resultBoxes(project)}
    </div>
    <div class="detail-layout">
      <div class="detail-main">
        ${project.details.map(([title, body]) => detailBlock(title, body)).join('')}
      </div>
      <aside class="detail-aside" aria-label="프로젝트 요약">
        <dl>
          <div><dt>Type</dt><dd>${escapeHtml(project.category)}</dd></div>
          <div><dt>Period</dt><dd>${escapeHtml(project.period)}</dd></div>
          <div><dt>Role</dt><dd>${escapeHtml(project.role)}</dd></div>
          <div><dt>What it shows</dt><dd>${escapeHtml(project.proof)}</dd></div>
        </dl>
        ${evidence}
      </aside>
    </div>
  `;
}

function renderAi() {
  const aiProjects = ['llm-robustness', 'ai-math', 'techcone-ai-hackathon'].map((slug) => renderProjectRow(PROJECT_MAP[slug])).join('');
  const llm = PROJECT_MAP['llm-robustness'];
  return html`
    <div class="page-head">
      <p class="kicker">AI Focus</p>
      <h2 class="page-title">AI</h2>
      <p class="page-description">
        AI 관련 내용은 “수학적 이해 → 모델 분석 → 학습 자료 제작 → 실제 문제 적용”의 흐름으로 정리했습니다.
      </p>
    </div>

    <section class="research-case">
      <div class="research-case-main">
        <span class="label">Main Research</span>
        <h3>${escapeHtml(llm.title)}</h3>
        <p>${escapeHtml(llm.summary)}</p>
        ${resultBoxes(llm)}
        ${linkList(llm.links)}
      </div>
      <aside class="research-case-side">
        <h4>연구에서 보이는 역량</h4>
        <ul>
          <li>Jacobian과 SVD를 LLM 최적화 문제에 연결</li>
          <li>GCG, Spectral, Hybrid 방법의 수렴 성능 비교</li>
          <li>평균 손실, 분산, 성공률 등 정량 지표로 결과 정리</li>
          <li>순수 Spectral 방법의 불안정성을 확인하고 Hybrid 전략 제안</li>
        </ul>
      </aside>
    </section>

    <section class="section">
      <div class="focus-grid four">
        <article class="focus-card"><span class="label">Mathematics</span><h3>선형대수와 미분</h3><p>Jacobian, SVD, 벡터 공간의 방향성을 모델 변화 분석에 연결했습니다.</p></article>
        <article class="focus-card"><span class="label">Model Analysis</span><h3>강건성 평가</h3><p>모델의 출력 유도 과정에서 최적화 방법이 얼마나 안정적인지 비교했습니다.</p></article>
        <article class="focus-card"><span class="label">Learning Tool</span><h3>AI Math</h3><p>퍼셉트론, MNIST, 합성곱, 풀링, CNN 파이프라인 등 기초 개념을 웹 자료로 정리했습니다.</p></article>
        <article class="focus-card"><span class="label">Application</span><h3>AI 해커톤</h3><p>AI를 과학문화와 지역 문제에 적용하는 아이디어 구체화 경험을 넣었습니다.</p></article>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>AI 관련 작업</h2>
        <p>AI를 연구, 학습 자료, 실제 활동으로 나누어 보여줍니다.</p>
      </div>
      <div class="project-list">${aiProjects}</div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>관련 증빙</h2>
        <p>AI 및 연구 관련성이 높은 자료만 선별했습니다.</p>
      </div>
      <div class="evidence-grid">${['ai-hackathon', 'steam', 'kaist'].map((id) => renderEvidenceCard(EVIDENCE.find((item) => item.id === id))).join('')}</div>
    </section>
  `;
}

function renderFoundations() {
  return html`
    <div class="page-head">
      <p class="kicker">Foundations</p>
      <h2 class="page-title">Foundations</h2>
      <p class="page-description">
        프로젝트 수를 늘리는 것보다 중요한 것은 기반 역량이 보이는 구조입니다. 알고리즘, 시스템 구현, 수학적 모델링, 검증 경험을 한 페이지에 묶었습니다.
      </p>
    </div>

    <div class="foundation-list">
      <article class="foundation-row">
        <div><span class="label">Algorithms</span><h3>문제 해결의 기본기</h3></div>
        <div>
          <p>정보올림피아드와 APIO 경험은 포트폴리오의 가장 강한 기반입니다. 프로젝트 설명도 알고리즘적 사고와 연결되도록 구성했습니다.</p>
          <ul>
            <li>APIO Official Participant · 국내 13위, 아시아 109위 / 1,043명</li>
            <li>한국정보올림피아드 다수 수상</li>
            <li><a class="text-link" href="#/work/cp-template">Competitive Programming Template</a></li>
          </ul>
        </div>
      </article>
      <article class="foundation-row">
        <div><span class="label">Systems</span><h3>낮은 레벨의 구현 경험</h3></div>
        <div>
          <p>컴파일러, 프로그래밍 언어, 데이터베이스 실험은 웹 UI보다 더 직접적으로 CS 기초 구현력을 보여줍니다.</p>
          <ul>
            <li><a class="text-link" href="#/work/matlang">Matlang</a> · parser, semantics, HIR, bytecode, runtime</li>
            <li><a class="text-link" href="#/work/starscript">starscript</a> · custom language syntax and interpreter</li>
            <li><a class="text-link" href="#/work/dbcord">dbcord</a> · schema, index, CRUD, validation</li>
          </ul>
        </div>
      </article>
      <article class="foundation-row">
        <div><span class="label">Math & Modeling</span><h3>수학을 코드와 실험으로 연결</h3></div>
        <div>
          <p>선형대수, 계산기하, 물리 시뮬레이션을 실제 프로젝트로 연결한 경험입니다.</p>
          <ul>
            <li><a class="text-link" href="#/work/llm-robustness">LLM Robustness Evaluation</a></li>
            <li><a class="text-link" href="#/work/hydrogen">수소충전소 최적 입지 분석 R&amp;E</a></li>
            <li><a class="text-link" href="#/work/friction-simulation">마찰보상 체험 웹</a></li>
            <li><a class="text-link" href="#/work/ai-math">AI Math</a></li>
          </ul>
        </div>
      </article>
      <article class="foundation-row">
        <div><span class="label">Validation</span><h3>문제를 만들고 검증하는 경험</h3></div>
        <div>
          <p>출제와 검수 경험은 알고리즘을 푸는 것에서 조건, 난이도, 데이터 안정성을 설계하는 경험으로 확장됩니다.</p>
          <ul>
            <li>출제 12문제 · 검수 13문제</li>
            <li>정해, 반례, 시간 복잡도, 테스트 데이터 강도 검토</li>
            <li><a class="text-link" href="#/setting">Problem Setting 페이지로 이동</a></li>
          </ul>
        </div>
      </article>
    </div>
  `;
}

function renderSetting() {
  const contests = [
    ['2025.03.22', 'DJMJ 포에버컵', '출제', '7문제 출제 · 백준 중학교 최초 프로그래밍 대회'],
    ['2025.07.27', '제2회 아니메컵', '출제 및 검수', '출제 1문제 · 검수 2문제'],
    ['2025.12.25', '제1회 코더즈 코딩페어', '출제', '4문제 출제'],
    ['2026.05.04', '명지대학교 프로그래밍 경진대회', '검수', '11문제 검수']
  ];
  return html`
    <div class="page-head">
      <p class="kicker">Contest Work</p>
      <h2 class="page-title">Problem Setting</h2>
      <p class="page-description">
        출제와 검수 경험은 알고리즘 실력을 “문제를 푸는 능력”에서 “문제를 설계하고 검증하는 능력”으로 확장해 보여줍니다.
      </p>
    </div>

    <div class="metrics">
      <article class="metric-card"><span class="label">Setting</span><strong>12문제 출제</strong><p>DJMJ 포에버컵, 아니메컵, 코더즈 코딩페어</p></article>
      <article class="metric-card"><span class="label">Review</span><strong>13문제 검수</strong><p>아니메컵, 명지대학교 프로그래밍 경진대회</p></article>
      <article class="metric-card"><span class="label">Validation</span><strong>정해 · 반례 · 데이터</strong><p>풀이 정당성, 시간 복잡도, 테스트 데이터 강도 검토</p></article>
      <article class="metric-card"><span class="label">Perspective</span><strong>참가자 관점</strong><p>문제 조건과 난이도가 어떻게 읽히는지 고려</p></article>
    </div>

    <section class="section">
      <div class="section-head">
        <h2>대회 이력</h2>
        <p>날짜, 역할, 범위를 기준으로 간결하게 정리했습니다.</p>
      </div>
      <div class="table-panel">
        <div class="table-row header"><span>Date</span><span>Contest</span><span>Role</span><span>Scope</span></div>
        ${contests.map(([date, name, role, scope]) => html`
          <div class="table-row"><span>${escapeHtml(date)}</span><span><strong>${escapeHtml(name)}</strong></span><span>${escapeHtml(role)}</span><span>${escapeHtml(scope)}</span></div>
        `).join('')}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <h2>검증 과정에서 드러나는 역량</h2>
        <p>출제 경험이 단순 목록으로 보이지 않도록, 역할을 네 단계로 설명했습니다.</p>
      </div>
      <div class="process-grid">
        <article class="process-card"><span class="label">01</span><h3>문제 조건 설계</h3><p>참가자가 오해하지 않도록 입력 범위, 예외 상황, 요구 조건을 명확히 만드는 경험입니다.</p></article>
        <article class="process-card"><span class="label">02</span><h3>정해와 복잡도</h3><p>풀이의 정당성과 시간 복잡도를 기준으로 의도한 알고리즘을 검증합니다.</p></article>
        <article class="process-card"><span class="label">03</span><h3>반례 탐색</h3><p>그럴듯하지만 틀린 풀이가 통과하지 않도록 경계 케이스와 반례를 찾습니다.</p></article>
        <article class="process-card"><span class="label">04</span><h3>테스트 데이터</h3><p>난이도와 데이터 강도를 조절해 공정하고 안정적인 대회 문제로 다듬습니다.</p></article>
      </div>
    </section>
  `;
}

function renderHonors() {
  const timeline = [
    ['고등학교 2학년 · 2026', [
      ['APIO Official Participant', '국내 13위, 아시아 109위 / 1,043명'],
      ['제13기 한성 노벨 영·수재 장학생', '장학생 선발']
    ]],
    ['고등학교 1학년 · 2025', [
      ['제42회 한국정보올림피아드 1차', '고등부 일반고부문 동상'],
      ['제42회 한국정보올림피아드 2차', '고등부 전체부문 장려상'],
      ['국제정보올림피아드 연습생 선발', '대표 선발 과정 참여'],
      ['한국수학올림피아드 오일러', '동상 수상'],
      ['국민대학교 알고리즘대회', '장려상 수상'],
      ['2025 융합형 연구과제 성과발표회', 'STEAM 클럽 최우수상 · 교육부장관상']
    ]],
    ['중학교 3학년 · 2024', [
      ['제41회 한국정보올림피아드 1차', '중등부 전체부문 은상'],
      ['제41회 한국정보올림피아드 2차', '중등부 동상'],
      ['건양대학교 정보보호영재교육원', '중등심화 과정 수료 및 우수상'],
      ['정보보호영재교육원 경진대회', '개인전 노력상']
    ]],
    ['중학교 2학년 · 2023', [
      ['제40회 한국정보올림피아드 1차', '중등부 전체부문 동상'],
      ['제40회 한국정보올림피아드 2차', '중등부 장려상'],
      ['공주대학교 과학영재교육원', '중등부 수학반 사사과정 연구상'],
      ['대학부설 과학영재교육원 사사과정 연구성과 발표대회', '우수상 · 한국과학기술원 총장상']
    ]]
  ];
  return html`
    <div class="page-head">
      <p class="kicker">Awards & Honors</p>
      <h2 class="page-title">Honors</h2>
      <p class="page-description">
        알고리즘, 연구, 수학, 장학생 선발 이력을 함께 정리했습니다. 주요 성과는 상단 지표로, 세부 이력은 학년별 타임라인으로 배치했습니다.
      </p>
    </div>

    <div class="metrics">
      <article class="metric-card"><span class="label">2026</span><strong>APIO Official Participant</strong><p>국내 13위, 아시아 109위 / 1,043명</p></article>
      <article class="metric-card"><span class="label">2025</span><strong>교육부장관상</strong><p>융합형 연구과제 성과발표회 최우수상</p></article>
      <article class="metric-card"><span class="label">Olympiad</span><strong>KOI 다수 수상</strong><p>중학교 2학년부터 고등학교 1학년까지 지속적인 수상</p></article>
      <article class="metric-card"><span class="label">Scholarship</span><strong>한성 노벨 영·수재</strong><p>제13기 장학생 선발</p></article>
    </div>

    <section class="section timeline">
      ${timeline.map(([year, items]) => html`
        <div class="timeline-group">
          <div class="timeline-year">${escapeHtml(year)}</div>
          <div class="timeline-items">
            ${items.map(([title, body]) => html`<article class="timeline-card"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(body)}</span></article>`).join('')}
          </div>
        </div>
      `).join('')}
    </section>

    <section class="section">
      <div class="section-head">
        <h2>증빙 이미지</h2>
        <p>생년월일이 보이는 KOI 상장은 전체 원본 대신 필요한 영역만 잘라 사용했습니다.</p>
      </div>
      <div class="evidence-grid">${EVIDENCE.map(renderEvidenceCard).join('')}</div>
    </section>
  `;
}

function parseRoute() {
  const cleaned = window.location.hash.replace(/^#\/?/, '').trim();
  const parts = cleaned.split('/').filter(Boolean);
  if (!parts.length) return { page: 'home' };
  if (parts[0] === 'work' && parts[1]) return { page: 'project', slug: parts[1] };
  if (Object.prototype.hasOwnProperty.call(ROUTES, parts[0])) return { page: parts[0] };
  return { page: 'home' };
}

function setActiveNav(page) {
  const active = page === 'project' ? 'work' : page;
  navLinks.forEach((link) => {
    const on = link.dataset.route === active;
    link.classList.toggle('is-active', on);
    if (on) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function attachFilterEvents(page) {
  if (page !== 'work') return;
  view.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedGroup = button.dataset.filter || 'All';
      render();
    });
  });
}

function attachLightboxEvents() {
  view.querySelectorAll('[data-lightbox]').forEach((button) => {
    button.addEventListener('click', () => {
      const src = button.dataset.lightbox;
      if (!src) return;
      lightboxImage.src = src;
      lightboxImage.alt = button.dataset.alt || '';
      lightboxTitle.textContent = button.dataset.title || '';
      lightboxCaption.textContent = button.dataset.caption || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.removeAttribute('src');
  document.body.style.overflow = '';
}

function render() {
  const route = parseRoute();
  let markup = '';
  let title = '';

  if (route.page === 'home') { markup = renderHome(); title = ROUTES.home; }
  else if (route.page === 'work') { markup = renderWork(); title = ROUTES.work; }
  else if (route.page === 'project') { markup = renderProjectDetail(route.slug); title = PROJECT_MAP[route.slug]?.title || ROUTES.work; }
  else if (route.page === 'ai') { markup = renderAi(); title = ROUTES.ai; }
  else if (route.page === 'foundations') { markup = renderFoundations(); title = ROUTES.foundations; }
  else if (route.page === 'setting') { markup = renderSetting(); title = ROUTES.setting; }
  else if (route.page === 'honors') { markup = renderHonors(); title = ROUTES.honors; }

  view.innerHTML = markup;
  setActiveNav(route.page);
  attachFilterEvents(route.page);
  attachLightboxEvents();
  document.title = `장우진 Portfolio · ${title}`;
  app?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.body.classList.remove('nav-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

lightbox?.querySelector('.lightbox-backdrop')?.addEventListener('click', closeLightbox);
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (lightbox && !lightbox.hidden) closeLightbox();
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('hashchange', render);

if (!window.location.hash) {
  window.location.hash = '#/home';
}

render();
