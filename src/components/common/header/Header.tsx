'use client';

import { HeaderTop } from './HeaderTop';
import { Navigation } from './nav/Navigation';

export function Header() {
  return (
    <header className="header_wrap dark_skin hover_menu_style2">
      <HeaderTop />
      <Navigation />
    </header>
  );
}
