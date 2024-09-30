import { NavItem } from './NavItem';

export function NavsList() {
  return (
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav">
        <NavItem title="소개글" href="/about" />
        <NavItem title="업무소개" href="/works" />
        <NavItem title="비용안내" href="/money" />
        <NavItem title="견적문의" href="/question" />
        <NavItem title="블로그" href="/blog" />
      </ul>
    </div>
  );
}
