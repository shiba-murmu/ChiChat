import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/user/Login'
import Register from './pages/user/Register'
import Account from './pages/user/Account'
import OtherAccount from './pages/contents/OtherAccount'
import Feeds from './pages/contents/Feeds'
import Chat from './pages/contents/Chat'
// import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/otheraccount" element={<OtherAccount />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/navbar" element={<Navbar />} /> */}
      </Routes>
    </Router>
  )
}

export default App


// import React from 'react'
// import { BrowserRouter as Route, Routes, Router } from 'react-router-dom'
// import Login from './pages/user/Login'
// import Register from './pages/user/Register'

// function App() {
//   return (
//     <> 
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//             </Routes>
//         </Router>
//     </>
//   )
// }

// export default App