import React from 'react'
import Navbar from '../../components/navbar/Navbar'
function Chat() {
  return (
    <>
        <Navbar />
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Chat Page</h1>
            <p>Welcome to the chat section!</p>
            <button onClick={() => alert('Chat button clicked!')} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
            Click Me
            </button>
        </div>
        <footer className="mt-4 text-center">
            <p className="text-gray-600">© 2023 Chat Application</p>
        </footer>
    </>
  )
}

export default Chat