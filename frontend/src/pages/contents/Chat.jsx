import React from 'react'
import { Link } from 'react-router-dom'
import TripleDot from '../../components/triple/TripleDot'
import LeftBack from '../../components/back/LeftBack'
function SpecificUserCard() {
    return (
        <>
            <div className='border-b border-gray-200 focus:bg-gray-200 hover:bg-gray-50 transition duration-200 ease-in-out'>

                <div className='flex justify-start items-center p-3 gap-4'>
                    <Link to='/messages' className='flex items-center gap-4 w-full'>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000"
                                alt="profile dp"
                                className='rounded-full border-2 shadow-md object-cover w-12 h-12'
                                loading='lazy'
                            />
                        </div>
                        <div>
                            <span className='font-semibold text-base'>Shiba Murmu</span>
                            <p className='text-gray-500 text-sm w-48 truncate'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </Link>
                    <div className='ml-auto flex items-center gap-2'>
                        <button className='text-gray-500 hover:text-gray-800'>
                            <TripleDot />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

function ChatHeader() {
    return (
        <>
            <div >
                <div>
                    <div className='flex justify-between items-center p-3 border-b border-gray-200'>
                        <div className='flex items-center gap-2'>
                            <Link to={'/feeds'} className='text-gray-500 hover:text-gray-800'>
                                < LeftBack />
                            </Link>
                            <span className='font-semibold text-lg'>Shiba Murmu</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='text-gray-500 hover:text-gray-800'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </button>
                            <button className='text-gray-500 hover:text-gray-800'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 13.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center p-3 border-b border-gray-200'>
                    <input type="text" placeholder="Search" className="bg-gray-200 pl-5 rounded-4xl focus:outline-gray-200 p-1 w-[100%]" />
                </div>
                <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                    <span className='text-gray-500 text-sm'>You have 0 messages</span>
                    <button className='text-gray-500 hover:text-gray-800 text-sm'>Requests</button>
                </div>
            </div>
        </>
    )
}


function Chat() {
    return (
        <>
            <div className='min-h-screen w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
                <ChatHeader />
                <SpecificUserCard />
                <SpecificUserCard />
                <SpecificUserCard />
                <SpecificUserCard />
                <SpecificUserCard />
                <SpecificUserCard />
                <SpecificUserCard />
                <SpecificUserCard />
                <SpecificUserCard />
                <SpecificUserCard />
            </div>
        </>
    )
}

export default Chat