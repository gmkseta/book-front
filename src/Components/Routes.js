import PropTypes from "prop-types";
import Main from '../Routes/Main';
import NotFound from '../Routes/404';
import Rating from '../Routes/Rating';
import Notification from '../Routes/Notification';
const LoggedInRoutes = () => (
  [
    // Index page
    {
      path: '/',
      component: Main,
    },
    {
      path: '/rating',
      component: Rating,
    },
    {
      path: '/notification',
      component: Notification,
    },
    {
      path: '(.*)',
      component: NotFound,
    },
  ]
);

const LoggedOutRoutes = () => (
  [
    {
      path: '/',
      component: Main,
    }
  ]
);

const AppRouter = ( isLoggedIn ) =>
  isLoggedIn ? LoggedInRoutes  : LoggedOutRoutes ;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;


