import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/register" className={buildLinkClass}>
        Registration
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log In
      </NavLink>
    </nav>
  );
};