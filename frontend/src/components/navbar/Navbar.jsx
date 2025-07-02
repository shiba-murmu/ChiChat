import React from 'react'


import { Link } from 'react-router-dom'
import Notifications from '../../pages/contents/Notifications'


function NotificationIcon() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 w-7 h-7 text-gray-600 hover:text-gray-800 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </>
    )
}
function MessageIcon() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" style={{}} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 w-7 h-7 text-gray-600 hover:text-gray-800 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
        </>
    )
}
function Navbar() {
    return (
        <>
            <nav className="bg-white sticky top-0 flex justify-between items-center p-2 shadow-md">
                <div className='text-3xl style-font' style={{ fontWeight: "600" }}>ChiChat</div>
                <div className='flex gap-3'>
                    <div className='flex items-center justify-center'>
                        <Link to={'/notifications'} className='flex items-center justify-center'>
                            {/* Notification icon */}
                            <NotificationIcon />
                        </Link>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='flex items-center justify-center'>
                            <Link to="/chat" className='flex items-center justify-center'><MessageIcon /></Link>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar