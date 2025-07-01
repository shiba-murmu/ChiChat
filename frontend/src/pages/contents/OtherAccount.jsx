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
                <div className='flex justify-center items-center gap-5 p-4'>
                    for user details
                </div>
                <div className='bg-amber-200 p-4'>
                    for user contents
                </div>
                <div>
                    <button>Button 1</button>
                    <button>Button 2</button>
                    <button>Button 3</button>
                </div>
            </div>
        </>
    )
}

export default OtherAccount