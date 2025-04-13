import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log('Navigation isLoggedIn:');
  // console.log(isLoggedIn);
  return (
    <>
      <nav className={css.nav}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
};
export default Navigation;
