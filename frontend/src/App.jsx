import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/user/Login'
import Register from './pages/user/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
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