import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log('isLoggedIn in restricted:');
  // console.log(isLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
