import React from 'react'
import { Link } from 'react-router-dom'
function SearchIcon() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 w-8 h-8 text-gray-600 hover:text-gray-800 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </>
    )
}

function HomeIcon() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 w-8 h-8 text-gray-600 hover:text-gray-800 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        </>
    )
}

function Taskbar() {
    return (
        <>
            <div className='sticky bottom-0 bg-white flex justify-around items-center p-2 shadow-md'>
                {/* Main container of the taskbar */}
                <div>
                    <Link to='/Feeds'>
                        <HomeIcon />
                    </Link>
                </div>
               
                <div>
                    < SearchIcon />
                </div>
                <div className='flex items-center justify-center'>
                        <Link to='/account'>
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000" alt="profile dp" className='rounded-full border-2 shadow-lg object-cover w-8 h-8' loading='lazy' />
                        </Link>
                </div>
            </div>
        </>
    )
}

export default Taskbar