
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Account from './pages/user/Account'
import OtherAccount from './pages/contents/OtherAccount'
import Feeds from './pages/contents/Feeds'
import Chat from './pages/contents/Chat'
import Taskbar from './components/taskbar/Taskbar'
import Notifications from './pages/contents/Notifications'
import Messages from './pages/user/Messages'

import PrivateRoute from './components/Lock/PrivateRoutes';  // PrivateRoute
import PublicRoutes from './components/Lock/PublicRoutes';  // PublicRoutes


// This component is the main entry point for the application.
// It uses the `Routes` component from `react-router-dom` to define the routes for the application.
// The `Route` components are used to define the individual routes, and the `element` prop is used to specify the component to render for each route.
// The `ToastContainer` component from `react-toastify` is used to display the toast notifications.
// The `Taskbar` component is used to display the taskbar at the bottom of the screen.
// The `PrivateRoute` component is used to protect the routes that require authentication.
// The `hideLayoutPaths` array is used to specify the paths where the Navbar and Taskbar should not be shown.
// The `shouldHideLayout` variable is used to determine if the current path is in the list of paths to hide the layout.
function App() {

    const location = useLocation();

    // Paths where Navbar and Taskbar should NOT be shown
    const hideLayoutPaths = ['/', '/register', '/messages', '/chat'];


    // Check if current path is in the list
    const shouldHideLayout = hideLayoutPaths.some(path => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);

      });
    //   console.log("Current Path:", location.pathname); 
    //   path pattern checking.
    return (
        <>
           < ToastContainer position='top-right' autoClose={3000} />  
            <Routes>
                {/* public routes */}
                <Route path="/" element={<PublicRoutes><Login /></PublicRoutes>} />
                <Route path="/register" element={<PublicRoutes><Register /> </PublicRoutes>} />

                {/* private routes */}
                <Route path="/account" element={<PrivateRoute><Account /> </PrivateRoute>} />
                <Route path="/otheraccount" element={<PrivateRoute><OtherAccount /></PrivateRoute>} />
                <Route path="/feeds" element={<PrivateRoute><Feeds /></PrivateRoute>} />
                <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
                <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
                <Route path="/messages" element={<PrivateRoute><Messages /></PrivateRoute>} />
                {/* <Route path="/navbar" element={<Navbar />} /> */}
            </Routes>
            {!shouldHideLayout && <Taskbar />}
        </>
    )
}

export default App
