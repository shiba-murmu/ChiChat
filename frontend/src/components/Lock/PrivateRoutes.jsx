import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/isAuthenticated';
const PrivateRoute = ({ children }) => {
    // This function will check if the user is authenticated or not
    // if authenticated it will allow the user to view the page
    // if not authenticated it will redirect the user to the homepage
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default PrivateRoute;