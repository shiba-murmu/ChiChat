import React from 'react'
import { Link } from 'react-router-dom'
import TripleDot from '../../components/triple/TripleDot'

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