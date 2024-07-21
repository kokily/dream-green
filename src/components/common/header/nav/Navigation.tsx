import Link from 'next/link';
import { MobileToggle } from './MobileToggle';
import { SideNav } from './SideNav';
import { NavsList } from './NavsList';

export function Navigation() {
  return (
    <div className="container nav-fixed">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" href="/">
          <img className="logo_dark" src="/img/logo01.png" alt="logo" />
        </Link>

        <MobileToggle />

        <NavsList />

        <SideNav />
      </nav>
    </div>
  );
}
