'use client';

interface Props {
  title: string;
  href: string;
}

export function NavItem({ title, href }: Props) {
  return (
    <li className="dropdown">
      <a className="nav-link" href={href}>
        {title}
      </a>
    </li>
  );
}
