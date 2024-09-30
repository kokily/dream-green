import { MobileToggle } from './MobileToggle';
import { NavsList } from './NavsList';

export function Navigation() {
  return (
    <div className="container nav-fixed">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img className="logo_dark" src="/img/logo01.png" alt="logo" />
        </a>

        <MobileToggle />

        <NavsList />
      </nav>
    </div>
  );
}

/*
  <SideNav />
*/
