import { NavLink } from 'react-router-dom';
import './DemoHeader.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/events', label: 'Events' },
];

export default function DemoHeader() {
  return (
    <header className="demo-header">
      <div className="demo-header__inner">
        <NavLink to="/" className="demo-header__brand">
          Brewzo Demo
        </NavLink>

        <nav className="demo-header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `demo-header__link${isActive ? ' demo-header__link-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
