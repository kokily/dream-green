import Link from 'next/link';

interface Props {
  title: string;
  menu: Array<MenuType>;
}

export function NavItem({ title, menu }: Props) {
  return (
    <li className="dropdown">
      <a className="dropdown-toggle nav-link" href="#!" data-toggle="dropdown">
        {title}
      </a>

      <div className="dropdown-menu">
        <ul>
          {menu.map((data) => (
            <li key={data.title}>
              <Link className="dropdown-item nav-link nav_item" href={data.url}>
                {data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
