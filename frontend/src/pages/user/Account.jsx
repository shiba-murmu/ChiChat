import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './account.css';
function AccountNotification() {
    return (
        <>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 w-7 h-7 text-gray-600 hover:text-gray-800 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg> */}
        </>
    )

}

function DrawerHide() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 w-8 h-8 text-gray-600 hover:text-gray-800 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </>
    )
}

function AccountMenu() {
    /**
     * Account menu component.
     * @returns {JSX.Element} JSX element representing the account menu icon.
     */
    return (
        <>
            <div>
                {/* Account menu icon */}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 w-8 h-8 text-gray-600 hover:text-gray-800 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </>
    )
}

function UserIcon() {
    /**
     * User icon component.
     * 
     * @returns {JSX.Element} JSX element representing the user icon.
     */
    return (
        <>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 w-7 h-7 text-gray-600 hover:text-gray-800 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
        </>
    )
}


function UserName() {
    /**
     * User name component.
     * 
     * @returns {JSX.Element} JSX element representing the user name.
     */
    return (
        <>
            <div className='flex flex-col justify-center items-start pl-2'>
                {/* User name and username */}
                <span className='font-bold text-md'>Shiba Murmu</span>
            </div>
        </>
    )
}


function Account() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <>
            <div>
                {/* Header */}
                <div className='flex justify-between items-center p-2'>
                    <div className='flex items-center'>
                        <UserIcon />
                        <UserName />
                    </div>
                    <button
                        onClick={toggleDrawer}
                        className='p-2 rounded-full hover:bg-gray-200 transition-colors duration-200'
                    >
                        <AccountMenu />
                    </button>
                </div>

                {/* Profile Section */}
                <div className='flex justify-center items-center gap-5 p-3'>
                    <div className='w-[30%] flex justify-center'>
                        <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
                            alt="Profile"
                            className='rounded-full border-2 shadow-lg object-cover w-24 h-24 md:w-32 md:h-32'
                            loading='lazy'
                        />
                    </div>

                    <div className='w-[70%]'>
                        <div className='mb-2'>
                            <span className='font-bold text-md'>Shiba Murmu</span>
                        </div>
                        <div className='flex gap-5'>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm'>20</span>
                                <span className='text-center text-sm'>Posts</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm'>100</span>
                                <span className='text-center text-sm'>Followers</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm'>30</span>
                                <span className='text-center text-sm'>Following</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center p-4'>for user details</div>
                <div className='bg-amber-200 p-4'>for user contents</div>
                <div className='flex gap-3 p-4'>
                    <button className='bg-gray-200 px-4 py-2 rounded'>
                        <Link to="/otheraccount" className='text-gray-800 hover:text-blue-600'>View Other Account</Link>
                    </button>
                    <button className='bg-gray-200 px-4 py-2 rounded'>Button 2</button>
                    <button className='bg-gray-200 px-4 py-2 rounded'>Button 3</button>
                </div>
            </div>

            {/* ⬅️ Drawer Overlay */}
            {isOpen && (
                <div
                   onClick={toggleDrawer}
                    role="presentation"
                    className="fixed inset-0 background-dark bg-opacity-10 z-30"
                />
            )}

            {/* 📦 Drawer Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="px-4 py-4 flex justify-between bg-gray-100 items-center shadow">
                    <h2 className="text-lg font-semibold">Shiba Murmu</h2>
                    <button onClick={toggleDrawer} className="text-2xl ">
                        <DrawerHide />
                    </button>
                </div>

                <div className="p-4">
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100">Profile</a>
                        </li>
                        <li>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100">Edit Profile</a>
                        </li>
                        <li>
                            <a href="#" className="block p-2 rounded hover:bg-gray-100">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Account;