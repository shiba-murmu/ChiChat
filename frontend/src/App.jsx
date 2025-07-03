import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Account from './pages/user/Account'
import OtherAccount from './pages/contents/OtherAccount'
import Feeds from './pages/contents/Feeds'
import Chat from './pages/contents/Chat'
// import Navbar from './components/navbar/Navbar'
import Navbar from './components/navbar/Navbar'
import Taskbar from './components/taskbar/Taskbar'
import Notifications from './pages/contents/Notifications'
import Messages from './pages/user/Messages'

function App() {
    return (
        <Router>
            <Navbar />
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
            <Taskbar />
        </Router>
    )
}

export default App
