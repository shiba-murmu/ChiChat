import React from 'react'


import { Link } from 'react-router-dom'

function OtherAccount() {
    return (
        <>
            <div>

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
                            <span className='font-bold text-md'>Shiba Murmu</span>
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
                    <p className='text-sm px-3 text-gray-500'>@shibamurmu_</p>
                </div>
                <div className='flex justify-start md:justify-center'>
                    <p className='text-sm  px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos</p>
                </div>


                <div className='flex gap-3 p-4 md:justify-center'>
                    <button className='bg-gray-200 px-4 py-2 rounded'>
                        <Link to="/otheraccount" className='text-gray-800 hover:text-blue-600'>View Other Account</Link>
                    </button>
                    <button className='bg-gray-200 px-4 py-2 rounded'>Button 2</button>
                    <button className='bg-gray-200 px-4 py-2 rounded'>Button 3</button>
                </div>
            </div>
        </>
    )
}

export default OtherAccount




