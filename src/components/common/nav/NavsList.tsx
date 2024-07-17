import { NavItem } from './NavItem';

export function NavsList() {
  return (
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        <NavItem
          title="소개글"
          menu={[
            { title: 'CEO', url: '/about' },
            { title: '업무소개', url: '/works' },
            { title: '찾아오시는 길', url: '/location' },
          ]}
        />
        <NavItem
          title="주요 업무"
          menu={[
            { title: '수거지역', url: '/area' },
            { title: '처리공정', url: '/process' },
            { title: '주요 이력', url: '/history' },
            { title: '폐기물 작업', url: '/waste' },
          ]}
        />
        <NavItem
          title="커뮤니티"
          menu={[
            { title: '비용안내', url: '/money' },
            { title: '자주하는 질문', url: '/faq' },
            { title: '온라인 문의', url: '/question' },
          ]}
        />
        <NavItem
          title="블로그"
          menu={[
            { title: '작업 블로그', url: '/blog' },
            { title: '꿈에그린환경', url: '/dreamgreen' },
          ]}
        />
      </ul>
    </div>
  );
}
