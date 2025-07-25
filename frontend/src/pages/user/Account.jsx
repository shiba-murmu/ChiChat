import React, { use, useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './account.css';
import { useNavigate } from 'react-router-dom';
import Logout from '../../components/Logout/Logout';

import Failed from '../../components/Toast/Failed';
import Success from '../../components/Toast/Success';

function DrawerOptions({ toggleDrawer }) {
    /**
     * Passing the props to trigger the onClick function of the toggleDrawer function in 
     * the parent component
     */
    const navigate = useNavigate();
    const logout = () => {
        Logout();
        navigate('/');
    }
    return (
        <>
            <div className="p-4">
                <ul className="space-y-2">
                    <li>
                        {/* <Link to={'/account'} onClick={toggleDrawer} className='block p-2 rounded hover:bg-gray-100'>Profile</Link>
                         */}
                        <button onClick={toggleDrawer} className='block p-2 rounded hover:bg-gray-100'>Profile</button>
                    </li>
                    <li>
                        {/* <a href="#" className="block p-2 rounded hover:bg-gray-100">Edit Profile</a>
                         */}
                         <button onClick={toggleDrawer} className='block p-2 rounded hover:bg-gray-100'>Edit Profile</button>
                    </li>
                    <li>
                        {/* <a href="#" className="block p-2 rounded hover:bg-gray-100">Logout</a> */}
                        <button  onClick={logout} className='block p-2 rounded hover:bg-gray-100'>Logout</button>
                        {/* <Link to={'/'} className='block p-2 rounded hover:bg-gray-100 text-red-600'>Logout</Link> */}
                    </li>
                </ul>
            </div>
        </>
    )
}



function DrawerHideIcons() {
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


function UserName({name}) {
    /**
     * User name component.
     * 
     * @returns {JSX.Element} JSX element representing the user name.
     */
    return (
        <>
            <div className='flex flex-col justify-center items-start pl-2'>
                {/* User name and username */}
                <span className='font-bold text-md'>{name}</span>
            </div>
        </>
    )
}


function Account() {
    /**
     * This is the main function here : 
     * @returns {JSX.Element} JSX element representing the account page.
     */
    const [isOpen, setIsOpen] = useState(false);
    const [profileName, setProfileName] = useState('No name');
    const [Username , setUsername] = useState('No username');
    const toggleDrawer = () => setIsOpen(!isOpen);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            axios.get('http://127.0.0.1:8000/api/user/profile/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setProfileName(response.data.first_name + ' ' + response.data.last_name);
                setUsername(response.data.username);
            })
            .catch(error => {
                console.error(error);
                Failed('Error fetching user details.');
            });
        }
    }, []);

    return (
        <>
            <div className='min-h-screen w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
                {/* Header */}
                <div className='flex justify-between items-center p-1'>
                    <div className='flex items-center'>
                        <UserIcon />
                        <UserName name={profileName} />
                    </div>
                    <button
                        onClick={toggleDrawer}
                        className='p-2 rounded-full hover:bg-gray-200 transition-colors duration-200'
                    >
                        <AccountMenu />
                    </button>
                </div>

                {/* Profile Section */}
                <div className='flex justify-center md:flex-col items-center gap-5 px-3'>
                    <div className='w-[30%] md:w-[100%] flex justify-center'>
                        <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
                            alt="Profile"
                            className='rounded-full border-2 shadow-lg object-cover w-24 h-24
                             md:w-40 md:h-40'
                            loading='lazy'
                        />
                    </div>
                    <div className='w-[70%] md:w-[100%]'>
                        <div className='mb-2 md:text-center'>
                            <span className='font-bold text-md'>{profileName}</span>
                        </div>
                        <div className='flex gap-5 md:justify-center'>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm md:text-md'>20</span>
                                <span className='text-center text-sm md:text-md'>Posts</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm md:text-md'>100</span>
                                <span className='text-center text-sm md:text-md'>Followers</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold text-center text-sm md:text-md'>30</span>
                                <span className='text-center text-sm md:text-md'>Following</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-start md:justify-center'>
                    <p className='text-sm px-3 text-gray-500'>@{Username}</p>
                </div>
                <div className='flex justify-start md:justify-center'>
                    <p className='text-sm  px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos</p>
                </div>

                {/* <hr /> */}
                <div className='flex gap-3 p-4 md:justify-center'>
                    <button className='bg-blue-500 text-white px-4 hover:cursor-pointer py-2 rounded hover:bg-blue-600 transition-colors duration-200'>Edit Profile</button>
                    <button className='bg-gray-200 text-gray-700 px-4 py-2 hover:cursor-pointer rounded hover:bg-gray-300 transition-colors duration-200'>Settings</button>
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
                    <h2 className="text-lg font-semibold">{profileName}</h2>
                    <button onClick={toggleDrawer} className="text-2xl ">
                        <DrawerHideIcons />
                    </button>
                </div>
                <DrawerOptions toggleDrawer={toggleDrawer} />
            </div>
        </>
    );
}

export default Account;