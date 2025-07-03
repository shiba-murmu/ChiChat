import React from 'react'
import { Link } from 'react-router-dom'

function TripleDotIcon() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

        </>
    )
}

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
                            <TripleDotIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
function Chat() {
    return (
        <>
            <div className='min-h-screen w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
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