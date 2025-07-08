import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../utils/isAuthenticated'
function PublicRoutes({ children }) {
    // This routes help us to check if the user is authenticated or not
    // if the user is already authenticated then it will 
    // redirect the user to the account page... even manually typing the logout urls.
  return  !isAuthenticated() ?  <Navigate to="/account" /> : children;
  
}

export default PublicRoutes;