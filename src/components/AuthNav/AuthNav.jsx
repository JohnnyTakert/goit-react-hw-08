import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.nav}>
      <NavLink className={css.navLink} to="/register">
        Register
      </NavLink>
      <NavLink className={css.navLink} to="/login">
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
