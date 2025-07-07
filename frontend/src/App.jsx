
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
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
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
