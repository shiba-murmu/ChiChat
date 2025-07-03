import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Account from './pages/user/Account'
import OtherAccount from './pages/contents/OtherAccount'
import Feeds from './pages/contents/Feeds'
import Chat from './pages/contents/Chat'
import Navbar from './components/navbar/Navbar'
import Taskbar from './components/taskbar/Taskbar'
import Notifications from './pages/contents/Notifications'
import Messages from './pages/user/Messages'

function App() {

    const location = useLocation();

    // Paths where Navbar and Taskbar should NOT be shown
    const hideLayoutPaths = ['/', '/register', '/messages', '/chat'];

    const hideLayoutPathsNavbar = ['/account'];

    // Check if current path is in the list
    const shouldHideLayout = hideLayoutPaths.includes(location.pathname);
    const shouldHideNavbar = hideLayoutPathsNavbar.includes(location.pathname);

    return (
        <>
            {!shouldHideLayout && !shouldHideNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
                <Route path="/otheraccount" element={<OtherAccount />} />
                <Route path="/feeds" element={<Feeds />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                {/* <Route path="/navbar" element={<Navbar />} /> */}
            </Routes>
            {!shouldHideLayout && <Taskbar />}
        </>
    )
}

export default App
