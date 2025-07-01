import React from 'react'




function OtherAccount() {
    return (
        <>
            <div>
                {/* Main div */}
                <div className='flex justify-center items-center gap-5 h-auto p-3'>
                    {/* User profile section */}
                    <div className='w-[30%] flex justify-center items-center '>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt=""
                            className='rounded-full border-2 border-white shadow-lg object-cover w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-56 2xl:h-56'
                            loading='lazy'
                        />
                        {/* image container may shrink in future if the user name is too long */}
                    </div>

                    <div className='w-[70%] '>
                        <div className='flex flex-col justify-center items-start mb-2'>
                            {/* User name and username */}
                            <span className='font-bold text-md'>John Doe</span>
                        </div>
                        <div className='flex  items-start gap-5'>
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
                <div className='flex justify-center items-center text-sm  gap-5 p-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.</p>
                </div>
                <div className='flex justify-center items-center gap-3 p-4'>
                    <button className='bg-gray-200 px-4 py-2 rounded'>
                        <span className='text-gray-800 hover:text-blue-600'>Follow</span>
                    </button>
                    <button className='bg-gray-200 px-4 py-2 rounded'>
                        <span className='text-gray-800 hover:text-blue-600'>Message</span>
                    </button>
                    <button className='bg-gray-200 px-4 py-2 rounded'>
                        <span className='text-gray-800 hover:text-blue-600'>Report</span>
                    </button>
                    <button className='bg-gray-200 px-4 py-2 rounded'>
                        <span className='text-gray-800 hover:text-blue-600'>View Other Account</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default OtherAccount